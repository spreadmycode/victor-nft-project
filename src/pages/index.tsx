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
import { MintCard } from '../components/mintcard';
import { RoadMap } from '../components/roadmap';
import { Member } from '../components/member';

const Home = () => {
  const [balance] = useWalletBalance()
  const [isActive, setIsActive] = useState(false);
  const [packCount, setPackCount] = useState<number>(2);
  const wallet = useWallet();

  const { isSoldOut, mintStartDate, isMinting, onMint, onMintMultiple, nftsData } = useCandyMachine()

  return (
    <main className="main-container">

      <Toaster />

      <Head>
        <title>TAMADODGY</title>
        <meta name="description" content="You can purchase TAMADODGY." />
        <link rel="icon" href="/mmtchi.ico" />
      </Head>

      <Header />

      <div className="flex flex-col justify-center items-center flex-1 mt-20">

        <div className="flex flex-col justify-center items-center flex-1 space-y-3 advertise">
          <div className="flex flex-col lg:flex-row space-y-2 lg:w-8/12">
            <img
              className="object-none object-left-bottom top-z-index"
              src={`/images/mmtchi.webp`}
              alt="MMTCHI" />

            <div className="bg-blue-900 rounded-lg border-white overflow-hidden border-8 space-y-3 p-10 lg:-ml-12">
              <p className="text-5xl text-yellow-400 amiga-font color-936">936</p>
              <p className="text-2xl text-white amiga-font">UNIQUE</p>
              <p className="text-2xl text-white amiga-font">TAMADODGY</p>
              <p className="text-lg text-red-500 amiga-font color-lightpink">LIVE ON SOLANA</p>
              <p className="text-base text-white leading-4">TamaDodgy is a limited NFT collection on the Solana blockchain. First generation supply is capped at 936. Your TamaDodgy allows you to earn dodgy royalties by staking in dodgy pools of dodgy DAO.</p>
              <p className="text-base text-white leading-4">All TamaDodgys are programmatically generated to include numerous dodgy traits and rarity. Adopting a TamaDodgy also gives you access to an extra dodgy version of your TamaDodgy and access to features within our TamaDodgy Pet Arcade Game, a virtual pet game with old school classic mini games.</p>
              <p className="text-base text-white leading-4">All TamaDodgy will be revealed shortly after being minted along with activating dodgy community features based on the roadmap. Please also join our dodgy Discord and connect via Grape to show off you as the verified dodgy owner of TamaDodgy.</p>
              <p className="text-base text-white leading-4">These dodgy creatures earn you passive income for life. Profits go to the community.</p>
            </div>
            
            <div className="flex pt-5 flex-row lg:flex-col lg:space-y-2">
              <a href="https://www.facebook.com/wix" target="_blank">
                <img
                  className="object-none"
                  width={200}
                  height={200}
                  src={`/images/btn_facebook.webp`}
                  alt="MMTCHI" />
              </a>
              <a href="https://www.twitter.com/wix" target="_blank">
                <img
                  className="object-none"
                  width={200}
                  height={200}
                  src={`/images/btn_tweek.webp`}
                  alt="MMTCHI" />
              </a>
              <a href="https://www.youtube.com/user/Wix" target="_blank">
                <img
                  className="object-none"
                  width={200}
                  height={200}
                  src={`/images/btn_youtube.webp`}
                  alt="MMTCHI" />
              </a>
              <a href="https://www.pinterest.com/user/Wix" target="_blank">
                <img
                  className="object-none"
                  width={200}
                  height={200}
                  src={`/images/btn_pinterest.webp`}
                  alt="MMTCHI" />
              </a>
              <a href="https://www.tweeks.com/user/Wix" target="_blank">
                <img
                  className="object-none"
                  width={200}
                  height={200}
                  src={`/images/btn_twitter.webp`}
                  alt="MMTCHI" />
              </a>
              <a href="https://www.instagram.com/user/Wix" target="_blank">
                <img
                  className="object-none"
                  width={200}
                  height={200}
                  src={`/images/btn_instagram.webp`}
                  alt="MMTCHI" />
              </a>
            </div>
          </div>
        </div>

        <div className="ribbon hidden lg:flex flex-col space-y-2">
          <p className="text-3xl text-white w-6/12 ml-60 mt-5 amiga-font">
            THE STORY . . .
          </p>
          <p className="text-sm text-white w-6/12 ml-60 mt-5 leading-4">
            TamaDodgy is inspired by the Millennial childhood Tamagochi Egg Watch handheld digital pet that was created in Japan by Akihiro Yokoi in 1997. They are the spawn of what happens when you have a bunch of 1997 pet creatures mixed with the 2021dodgy pixelated punk world. This lot are looking for a new home and are up for adoption. They were originally going to Ethereum, but they were too dodgy for Vitalik. So the TamaDodgy decided to spawn in the more dodgy island - Solana, the blockchain of every dodgy pixel's dream, by the extra dodgy Sam.
          </p>
          <p className="text-sm text-white w-6/12 ml-60 mt-5 leading-4">
            All they need is the right person to adopt them and give them all the dodgy love and care. These TamaDodgy may be dodgy but they have big dreams and their properties uniquely reflect who they are and promise to reward their owners handsomely.          </p>
        </div>

        <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-3 mt-10 md:ml-20 md:mr-20" id="mint">
          <MintCard 
            title="Baby" 
            image={`/images/babyx.webp`} 
            description="26 Characters Random Generated with 3 Style of Shell and Background 26 Characters Random Generated with 3 Style of Shell and Background"
            gifImage={`/images/baby.gif`}
            price="1.0 SOL"
            onClick={onMint}
            isSoldOut
            isMinting
            isActive
          />
          <MintCard 
            title="TODDLER" 
            image={`/images/toddlerx.webp`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            gifImage={`/images/toddler.gif`}
            price="1.0 SOL"
            onClick={onMint}
            isSoldOut
            isMinting
            isActive
          />
          <MintCard 
            title="TEENAGER" 
            image={`/images/teenagerx.webp`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            gifImage={`/images/teenager.gif`}
            price="1.0 SOL"
            onClick={onMint}
            isSoldOut
            isMinting
            isActive
          />
          <div className="col-span-1"></div>
          <MintCard 
            title="ADULT" 
            image={`/images/adultx.webp`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            gifImage={`/images/adult.gif`}
            price="1.5 SOL"
            onClick={onMint}
            isSoldOut
            isMinting
            isActive
          />
          <MintCard 
            title="MYSTERY" 
            image={`/images/mystery.webp`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            gifImage={`/images/adult.gif`}
            price="2.0 SOL"
            onClick={onMint}
            isSoldOut
            isMinting
            isActive
          />
          <div className="col-span-1"></div>
        </div>

        <div className="roadmap flex flex-col justify-center items-center flex-1 mt-10 p-10" id="roadmap">
          <p className="text-pink-400 lg:text-7xl md:text-6xl text-4xl text-center mb-5 amiga-font">ROADMAP</p>

          <RoadMap
            title="P1"
            list={['September 1 - Project launched', 'October - Partner with other dodgy projects in Solana', 'Mint Date - October 17th, 2021']}
            image={`/images/p1.webp`}
          />
          <RoadMap
            title="P2"
            list={['20% Sold - NFT Giveaway', 'A random airdrop of 10 NFTs to early community members in our discord.​', '80% Sold - Extra Dodgy Collection', 'We will create a limited collection of Extra Dodgy TamaDodgy and make them available for holders.', '100% Sold - Virtual Pet Game', 'Commence the building of a virtual pet game of TamaDodgy where owners will be able to interact with their TamaDodgy.']}
            image={`/images/p2.webp`}
          />
          <RoadMap
            title="P3"
            list={['Collaboration with artists on limited edition 1:1 pieces that will be available to TamaDodgy holders', 'Creation of DAO and staking for royalties']}
            image={`/images/p3.webp`}
          />
          <RoadMap
            title="P4"
            list={['Liquidity wallet to be used to buy floor of TamaDodgy NFTs and doing charity/community projects', 'Metaverse Collabs, 3D Open World RPG']}
            image={`/images/p4.webp`}
          />
        </div>

        <div className="flex flex-col justify-center items-center flex-1 mt-5 mb-10">
          <p className="text-pink-400 lg:text-7xl md:text-5xl text-4xl text-center amiga-font mt-5">TEAM MEMBERS</p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5 lg:w-9/12">
            <Member
              image={`/images/kilibe.webp`}
              name="Kilibe"
              description="Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go-to font for titles, paragraphs & more."
            />
            <Member
              image={`/images/nana.webp`}
              name="Nana"
              description="Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go-to font for titles, paragraphs & more."
            />
            <Member
              image={`/images/k9.webp`}
              name="K9"
              description="Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go-to font for titles, paragraphs & more."
            />
            <Member
              image={`/images/Jade.webp`}
              name="Jade"
              description="Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go-to font for titles, paragraphs & more."
            />
          </div>
        </div>

        <div className="m-5 relative" id="faq">
          <img
            width="200"
            height="200"
            className="absolute inset-x-16 -top-20 lg:visible invisible"
            src={`/images/cloud.webp`}
            alt="MMTCHI" />
          <img
            width="170"
            height="170"
            className="absolute right-16 top-20 lg:visible invisible"
            src={`/images/cloud.webp`}
            alt="MMTCHI" />
          <img
            width="170"
            height="170"
            className="absolute left-16 -bottom-20 lg:visible invisible"
            src={`/images/cloud.webp`}
            alt="MMTCHI" />
          <div className="background-qa w-full md:w-9/12 mx-auto p-8 amiga-font">
            <p className="text-3xl mb-5 color-magenta text-center">Frequently asked questions</p>
            <div>
                <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2" />
                  <label className="block p-5 leading-normal cursor-pointer" htmlFor="tab-single-one">How can I mint the NFT?</label>
                  <div className="tab-content overflow-hidden leading-normal">
                      <p className="p-5">Click "CONNECT" on the upper right corner to connect your Solana Wallet. Click on the NFT you wish to mint and approve the transaction.</p>
                  </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2" />
                  <label className="block p-5 leading-normal cursor-pointer" htmlFor="tab-single-two">Are there a limit with how many NFT I can mint?</label>
                  <div className="tab-content overflow-hidden leading-normal">
                      <p className="p-5">No, user can mint as much as they want as long as the supplies last.</p>
                  </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2" />
                  <label className="block p-5 leading-normal cursor-pointer" htmlFor="tab-single-three">Can I resell the NFT?</label>
                  <div className="tab-content overflow-hidden leading-normal">
                      <p className="p-5">Yes, owner can resell their NFT whenever they want, there will be a 10% royality fee.</p>
                  </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                  <input className="absolute opacity-0" id="tab-single-four" type="radio" name="tabs2" />
                  <label className="block p-5 leading-normal cursor-pointer" htmlFor="tab-single-four">Will the team release more collection?</label>
                  <div className="tab-content overflow-hidden leading-normal">
                      <p className="p-5">Yes, we have plans to release another collection, we are already working on the art and we will make an announcement very soon.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <Footer />

        <div className="hidden">
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
        </div>

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



