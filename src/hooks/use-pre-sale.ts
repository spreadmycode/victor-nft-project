import { useEffect, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import toast from 'react-hot-toast';
import { Keypair } from "@solana/web3.js";
import BN from 'bn.js';
import { 
  PRESALE_CONTRACT_ID, 
  PRESALE_CONTRACT_ACCOUNT, 
  CONTRACT_PIVATE_KEY, 
  MINTER_STATUS,
} from "../utils/constants";

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

interface PresaleContract {
    id: anchor.web3.PublicKey;
    account: anchor.web3.PublicKey,
    program: anchor.Program,
}

export interface Presale {
    checkMintPossible: any, 
    updatePresaleContractAccount: any,
    presaleStartDate: Date,
    presaleEndDate: Date,
}

export default function usePreSaleContract() {

    const [presaleContract, setPresaleContractor] = useState<PresaleContract>();
    const [presaleStatus, setPresaleStatus] = useState<number>(0);
    const [presaleIndex, setPresaleIndex] = useState<number>(0);
    const [presaleStartDate, setPresaleStartDate] = useState<Date>(new Date());
    const [presaleEndDate, setPresaleEndDate] = useState<Date>(new Date());

    const wallet = useWallet();

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

            // Prepare pre-sale smart contract
            const program = await loadPresaleContract();
            if (program) {
                setPresaleContractor({
                    id: PRESALE_CONTRACT_ID,
                    account: PRESALE_CONTRACT_ACCOUNT,
                    program
                });
                const data: any = await program.account.data.fetch(PRESALE_CONTRACT_ACCOUNT);
                const startDate = data.presaleStartDate.toNumber();
                const endDate = data.presaleEndDate.toNumber();
                setPresaleStartDate(new Date(startDate));
                setPresaleEndDate(new Date(endDate));
            }
        }) ();
    }, [wallet, connection]);

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
          const checkStatus = data.checkStatus.toNumber();
          const whitelistIndex = data.whitelistIndex.toNumber();
          setPresaleStatus(checkStatus);
          setPresaleIndex(whitelistIndex);
    
          switch (presaleStatus) {
            case MINTER_STATUS.Available:
              toast.success("You are in whitelist.");
              return true;
            case MINTER_STATUS.PreSaleEnded:
              toast.success("You can mint NFT now.");
              return true;
            case MINTER_STATUS.AlreadyMinted:
              toast.error("Mint failed! You've already MINT!");
              break;
            case MINTER_STATUS.NotExistInWhiteList:
              toast.error("Mint failed! You are not in White List!");
              break;
            case MINTER_STATUS.PreSaleNoItem:
              toast.error("Mint failed! Pre-Sale Sold Out!");
              break;
            case MINTER_STATUS.PreSaleNotStarted:
              toast.error("Mint failed! Pre-Sale Not Started Pre-Sale! Please wait.");
              break;
          }
        } else {
            window.scrollTo({top: 0, behavior: 'smooth'});
            toast.error("Please Connect Wallet."); 
        }
    
        return false;
    };
    
    const updatePresaleContractAccount = async () => {
        if (wallet.connected && wallet.publicKey) {
            if (presaleStatus != MINTER_STATUS.Available) return;

            await presaleContract?.program.rpc.decreaseCount(
                new BN(presaleIndex),
                {
                    accounts: {
                        data: presaleContract.account,
                        minter: wallet?.publicKey,
                    }
                },
            );
        }
    };

    return {checkMintPossible, updatePresaleContractAccount, presaleStartDate, presaleEndDate};
}
