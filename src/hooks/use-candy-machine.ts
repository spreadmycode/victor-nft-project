import { useEffect, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { awaitTransactionSignatureConfirmation, CandyMachine, getCandyMachineState, mintOneToken, mintMultipleToken } from "../utils/candy-machine";
import { useWallet } from "@solana/wallet-adapter-react";
import toast from 'react-hot-toast';
import useWalletBalance from "./use-wallet-balance";
import { LAMPORTS_PER_SOL, Keypair } from "@solana/web3.js";
import { sleep } from "../utils/utility";
import BN from 'bn.js';
import { 
  PRESALE_CONTRACT_ID, 
  PRESALE_CONTRACT_ACCOUNT, 
  CONTRACT_PIVATE_KEY, 
  MINTER_STATUS,
} from "../utils/constants";

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);
const treasury = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_TREASURY_ADDRESS!);

const txTimeout = 30000;

interface PresaleContract {
  id: anchor.web3.PublicKey;
  account: anchor.web3.PublicKey,
  program: anchor.Program,
}

export default function useCandyMachine(_candyMachineId: string, _config: string, _mintPrice: number, _mintStartDate: string) {
  const candyMachineId = new anchor.web3.PublicKey(_candyMachineId);
  const config = new anchor.web3.PublicKey(_config);

  const [, setBalance] = useWalletBalance()
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const [presaleContract, setPresaleContractor] = useState<PresaleContract>();
  const [whitelistIndex, setWhitelistIndex] = useState<number>(0);
  const wallet = useWallet();
  const [nftsData, setNftsData] = useState<any>({} = {
    itemsRemaining: 0,
    itemsRedeemed: 0,
    itemsAvailable: 0
  } as any);
  const [isMinting, setIsMinting] = useState(false);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [mintStartDate, setMintStartDate] = useState(new Date(parseInt(_mintStartDate, 10)));

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          anchorWallet,
          candyMachineId,
          connection
        );

      // Prepare pre-sale smart contract
      const program = await loadPresaleContract();
      if (program) {
        setPresaleContractor({
          id: PRESALE_CONTRACT_ID,
          account: PRESALE_CONTRACT_ACCOUNT,
          program
        });
      }

      setIsSoldOut(itemsRemaining === 0);
      setMintStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, candyMachineId, connection]);

  useEffect(() => {
    (async () => {
      if (!isMinting) {
        const anchorWallet = {
          publicKey: wallet.publicKey,
          signAllTransactions: wallet.signAllTransactions,
          signTransaction: wallet.signTransaction,
        } as anchor.Wallet;

        const { itemsRemaining, itemsRedeemed, itemsAvailable } =
          await getCandyMachineState(
            anchorWallet,
            candyMachineId,
            connection
          );

        setNftsData({ itemsRemaining, itemsRedeemed, itemsAvailable });
      }
    })();
  }, [wallet, candyMachineId, connection, isMinting]);

  const loadContractPrivateKey = async () => {
    const loaded = Keypair.fromSecretKey(
        new Uint8Array(JSON.parse(CONTRACT_PIVATE_KEY)),
    );
    return loaded;
  }

  const loadPresaleContract = async () => {
    const walletKeyPair = await loadContractPrivateKey();
    const walletWrapper = new anchor.Wallet(walletKeyPair);

    const provider = new anchor.Provider(connection, walletWrapper, {
      preflightCommitment: 'recent',
    });

    const idl = await anchor.Program.fetchIdl(PRESALE_CONTRACT_ID, provider);

    if (idl) {
      return new anchor.Program(idl, PRESALE_CONTRACT_ID, provider);
    } else {
      return null;
    }
  }

  const checkMintPossible = async () => {
    if (wallet.connected && wallet.publicKey) {
      let date = new Date();
      let currentMilis: number = Date.parse(date.toUTCString());
      await presaleContract?.program.rpc.checkMintPossible(
        wallet.publicKey?.toBase58(),
        new BN(currentMilis),
        {
          accounts: {
            data: presaleContract.account,
            minter: wallet?.publicKey,
          }
        },
      );
      const data: any = await presaleContract?.program.account.data.fetch(presaleContract.account);
      const checkStatus = data.checkStatus;
      const whitelistIndex = data.whitelistIndex;
      setWhitelistIndex(whitelistIndex);

      switch (checkStatus) {
        case MINTER_STATUS.Available:
          toast.success("You are in whitelist.");
          return true;
        case MINTER_STATUS.PreSaleEnded:
          toast.success("You can mint NFT now.");
          return true;
        case MINTER_STATUS.AlreadyMinted:
          toast.error("Mint failed! You've already MINT!")
          break;
        case MINTER_STATUS.NotExistInWhiteList:
          toast.error("Mint failed! You are not in White List!")
          break;
        case MINTER_STATUS.PreSaleNoItem:
          toast.error("Mint failed! Pre-Sale Sold Out!")
          break;
        case MINTER_STATUS.PreSaleNotStarted:
          toast.error("Mint failed! Pre-Sale Not Started! Please wait.")
          break;
      }
    } else {
      toast.error("Please Connect Wallet.")
    }

    return false;
  };

  const updatePresaleContractAccount = async () => {
    if (wallet.connected && wallet.publicKey) {
      await presaleContract?.program.rpc.decreaseCount(
        new BN(whitelistIndex),
        {
          accounts: {
            data: presaleContract.account,
            minter: wallet?.publicKey,
          }
        },
      );
    }
  };

  const onMint = async () => {
    try {
      setIsMinting(true);

      // Check current wallet can mint
      if (!checkMintPossible()) {
        setIsMinting(false);
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;
      const { candyMachine } =
        await getCandyMachineState(
          anchorWallet,
          candyMachineId,
          connection
        );

      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          config,
          wallet.publicKey,
          treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          txTimeout,
          connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          toast.success("Congratulations! Mint succeeded! Check the 'My Arts' page :)");

          // Update account data of pre-sale smart contract
          await updatePresaleContractAccount();

        } else {
          toast.error("Mint failed! Please try again!");
        }
      }
    } catch (error: any) {
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }
      toast.error(message)
    } finally {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  const onMintMultiple = async (quantity: number) => {
    try {
      setIsMinting(true);
      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;
      const { candyMachine } =
        await getCandyMachineState(
          anchorWallet,
          candyMachineId,
          connection
        );
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const oldBalance = await connection.getBalance(wallet?.publicKey) / LAMPORTS_PER_SOL;
        const futureBalance = oldBalance - (_mintPrice * quantity)

        const signedTransactions: any = await mintMultipleToken(
          candyMachine,
          config,
          wallet.publicKey,
          treasury,
          quantity
        );

        const promiseArray = []
        
        for (let index = 0; index < signedTransactions.length; index++) {
          const tx = signedTransactions[index];
          promiseArray.push(awaitTransactionSignatureConfirmation(
            tx,
            txTimeout,
            connection,
            "singleGossip",
            true
          ))
        }

        const allTransactionsResult = await Promise.all(promiseArray)
        let totalSuccess = 0;
        let totalFailure = 0;

        for (let index = 0; index < allTransactionsResult.length; index++) {
          const transactionStatus = allTransactionsResult[index];
          if (!transactionStatus?.err) {
            totalSuccess += 1
          } else {
            totalFailure += 1
          }
        }

        let newBalance = await connection.getBalance(wallet?.publicKey) / LAMPORTS_PER_SOL;

        while(newBalance > futureBalance) {
          await sleep(1000)
          newBalance = await connection.getBalance(wallet?.publicKey) / LAMPORTS_PER_SOL;
        }

        if(totalSuccess) {
          toast.success(`Congratulations! ${totalSuccess} mints succeeded! Your NFT's should appear in your wallet soon :)`, { duration: 6000, position: "bottom-center" })
        }

        if(totalFailure) {
          toast.error(`Some mints failed! ${totalFailure} mints failed! Check on your wallet :(`, { duration: 6000, position: "bottom-center" })
        }
      }
    } catch (error: any) {
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }
      toast.error(message)
    } finally {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };


  return { isSoldOut, mintStartDate, isMinting, nftsData, onMint, onMintMultiple }
}