import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from "@solana/wallet-adapter-react";
import React from 'react';
import Link from 'next/link'

const Header: React.FC = () => {

  const wallet = useWallet();

  return <div className="flex flex-col xl:flex-row justify-between space-x-0 xl:space-x-5 space-y-5 p-5">
    <div className="sm:mx-auto xl:ml-40">
      <img
        src={`/images/tamdodgy logo.webp`}
        alt="Logo" />
    </div>
    <div className="text-black justify-center space-x-6 text-1xl md:text-2xl lg:pr-10 font-bold flex items-center">
      <Link href="/">
        <a>Home</a>
      </Link>
      {/* <Link href="/my-nfts">
        <a>My NFTs</a>
      </Link> */}
      <Link href="#mint">
        <a>MINT</a>
      </Link>
      <Link href="#roadmap">
        <a>ROADMAP</a>
      </Link>
      <Link href="#faq">
        <a>FAQ</a>
      </Link>
    </div>
    <div className="flex items-center justify-center float-right">
      <WalletMultiButton>{wallet.connected ? "Connected" : "Connect"}</WalletMultiButton>
    </div>
  </div>;
}

export default Header;