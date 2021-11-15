import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from "@solana/wallet-adapter-react";
import React from 'react';
import Link from 'next/link'
import Countdown from 'react-countdown';
import { shortenAddress } from '../utils/candy-machine';

const Header = ({ isActive, setIsActive, mintStartDate }: any) => {

  const wallet = useWallet();

  const renderAliveCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
      <span className="text-gray-800 font-bold lg:text-2xl sm:text-xl cursor-default">
        Live in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </span>
    );
  };

  return <div className="flex flex-col space-y-5 items-center justify-center">
    <div className="flex flex-col xl:flex-row justify-between space-x-0 xl:space-x-5 space-y-5 p-5">
      <div className="sm:mx-auto xl:ml-40">
        <img
          src={`/images/tamdodgy logo.webp`}
          alt="Logo" />
      </div>
      <div className="text-black justify-center space-x-6 text-xl lg:pl-10 lg:pr-10 font-bold flex items-center">
        <Link href="/">
          <a>HOME</a>
        </Link>
        {/* <Link href="/my-nfts">
          <a>My NFTs</a>
        </Link> */}
        <Link href="/#mint">
          <a>MINT</a>
        </Link>
        <Link href="/#roadmap">
          <a>ROADMAP</a>
        </Link>
        <Link href="/#faq">
          <a>FAQ</a>
        </Link>
      </div>
      <div className="flex items-center justify-center float-right">
        <WalletMultiButton>{wallet.connected ? shortenAddress(wallet.publicKey?.toBase58() || '', 2) : "Connect"}</WalletMultiButton>
      </div>
    </div>

    {!isActive && <Countdown
      date={mintStartDate}
      onMount={({ completed }) => completed && setIsActive(true)}
      onComplete={() => setIsActive(true)}
      renderer={renderAliveCounter}
    />}
  </div>;
}

export default Header;