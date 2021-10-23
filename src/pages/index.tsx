import Head from 'next/head'

import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import useCandyMachine from '../hooks/use-candy-machine';
import Header from '../components/header';
import Footer from '../components/footer';
import { MintCard } from '../components/mintcard';
import { Faq } from '../components/faq';
import { Members } from '../components/members';
import { RoadMap } from '../components/roadmap';
import { CANDY_MACHINE_ID, CANDY_MACHINE_CONFIG, MINT_PRICE_SOL, CANDY_START_DATE } from '../utils/constants';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const { isSoldOut, mintStartDate, isMinting, onMint, onMintMultiple, nftsData } = useCandyMachine(
    CANDY_MACHINE_ID, CANDY_MACHINE_CONFIG, MINT_PRICE_SOL, CANDY_START_DATE
  );

  return (
    <main className="main-container">

      <Toaster />

      <Head>
        <title>TAMADODGY</title>
        <meta name="description" content="You can purchase TAMADODGY." />
        <link rel="icon" href="/mmtchi.png" />
      </Head>

      <Header isActive={isActive} setIsActive={setIsActive} mintStartDate={mintStartDate} />

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
            onMint={onMint}
            onPackMint={onMintMultiple}
            isSoldOut={isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={nftsData}
          />
          <MintCard 
            title="TODDLER" 
            image={`/images/toddlerx.webp`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            gifImage={`/images/toddler.gif`}
            price="1.0 SOL"
            onMint={onMint}
            onPackMint={onMintMultiple}
            isSoldOut={isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={nftsData}
          />
          <MintCard 
            title="TEENAGER" 
            image={`/images/teenagerx.webp`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            gifImage={`/images/teenager.gif`}
            price="1.0 SOL"
            onMint={onMint}
            onPackMint={onMintMultiple}
            isSoldOut={isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={nftsData}
          />
          <div className="col-span-1"></div>
          <MintCard 
            title="ADULT" 
            image={`/images/adultx.webp`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            gifImage={`/images/adult.gif`}
            price="1.5 SOL"
            onMint={onMint}
            onPackMint={onMintMultiple}
            isSoldOut={isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={nftsData}
          />
          <MintCard 
            title="MYSTERY" 
            image={`/images/mystery.webp`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            gifImage={`/images/adult.gif`}
            price="2.0 SOL"
            onMint={onMint}
            onPackMint={onMintMultiple}
            isSoldOut={isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={nftsData}
          />
          <div className="col-span-1"></div>
        </div>

        <RoadMap />

        <Members />

        <Faq />

      </div>

      <Footer />

    </main>
  );
};

export default Home;



