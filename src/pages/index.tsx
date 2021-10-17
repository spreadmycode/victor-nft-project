import Head from 'next/head'

import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from '../hooks/use-candy-machine';
import Header from '../components/header';
import Footer from '../components/footer';
import useWalletBalance from '../hooks/use-wallet-balance';
import { shortenAddress } from '../utils/candy-machine';
import Countdown from 'react-countdown';
import { RecaptchaButton } from '../components/recaptcha-button';

const Home = () => {
  const [balance] = useWalletBalance()
  const [isActive, setIsActive] = useState(false);
  const [packCount, setPackCount] = useState<number>(2);
  const wallet = useWallet();

  const { isSoldOut, mintStartDate, isMinting, onMint, onMintMultiple, nftsData } = useCandyMachine()

  return (
    <main className="p-5">
      <Toaster />
      <Head>
        <title>GIF Mint dApp</title>
        <meta name="description" content="You can mint NFT with gif metadata." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex flex-col justify-center items-center flex-1 space-y-3 mt-20">
        {/* <img
          className="rounded-md shadow-lg"
          src={`/candy.jpeg`}
          height={200}
          width={200}
          alt="Candy Image" /> */}

        {/* <span className="text-gray-800 font-bold text-2xl cursor-default">
          THIS IS THE BEST CANDY MACHINE EVER
        </span> */}

        {/* {!wallet.connected && <span
          className="text-gray-800 font-bold text-2xl cursor-default">
          NOT CONNECTED, PLEASE CLICK SELECT WALLET...
        </span>} */}

        {wallet.connected &&
          <p className="text-gray-800 font-bold text-lg cursor-default">Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
        }

        {wallet.connected &&
          <>
            <p className="text-gray-800 font-bold text-lg cursor-default">Balance: {(balance || 0).toLocaleString()} SOL</p>
            <p className="text-gray-800 font-bold text-lg cursor-default">Available: {nftsData.itemsRemaining}</p>
            <p className="text-gray-800 font-bold text-lg cursor-default">Minted: {nftsData.itemsRedeemed}</p>
            <p className="text-gray-800 font-bold text-lg cursor-default">Total: {nftsData.itemsAvailable}</p>
          </>
        }

        <div className="flex flex-col justify-start items-start">
          {wallet.connected &&
            // <RecaptchaButton
            <button
              // actionName="mint"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5"
              disabled={isSoldOut || isMinting || !isActive}
              onClick={onMint}
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ?
                <span>MINT {isMinting && 'LOADING...'}</span> :
                <Countdown
                  date={mintStartDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              }
            </button>
            // </RecaptchaButton>
          }

          {wallet.connected &&
          <>
            <input type="number" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5" 
              step={1} min={2} max={5} value={packCount} 
              onChange={(e) => { setPackCount(Number.parseInt(e.target.value)); }} 
            />
            {/* <RecaptchaButton */}
            <button
              // actionName="mint5"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2"
              disabled={isSoldOut || isMinting || !isActive}
              onClick={() => onMintMultiple(packCount)}
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ?
                <span>{packCount} NFTs {isMinting && 'LOADING...'}</span> :
                <Countdown
                  date={mintStartDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              }
            </button>
            {/* </RecaptchaButton> */}
          </>
          }
        </div>
        {/* <Footer /> */}
      </div>
    </main>
  );
};

const renderCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <span className="text-gray-800 font-bold text-2xl cursor-default">
      Live in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
};

export default Home;



