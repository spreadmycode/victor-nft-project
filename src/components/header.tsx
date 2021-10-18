import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import Link from 'next/link'

const Header: React.FC = () => {
  return <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-5 md:space-x-0 p-5">
    <div className="md:ml-40">
      <img
          src={`/images/tamdodgy logo.webp`}
          alt="Logo" />
    </div>
    <div className="text-black space-x-6 text-2xl	font-bold flex items-center">
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
    <div className="flex space-x-5 items-center">
      <WalletMultiButton />
      {/* <WalletDisconnectButton /> */}
    </div>
  </div>;
}

export default Header;