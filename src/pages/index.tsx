import Head from 'next/head'

import { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import Header from '../components/header';
import Footer from '../components/footer';
import { MintCard } from '../components/mintcard';
import { Faq } from '../components/faq';
import { Members } from '../components/members';
import { RoadMap } from '../components/roadmap';
import useCandyMachine from '../hooks/use-candy-machine';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [width, setWindowWidth] = useState(1024);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const candyMachine = useCandyMachine();

  return (
    <main className="main-container">

      <Toaster />

      <Head>
        <title>TAMADODGY</title>
        <meta name="description" content="You can purchase TAMADODGY." />
        <link rel="icon" href="/mmtchi.png" />
      </Head>

      <Header 
        isActive={isActive} 
        setIsActive={setIsActive} 
        mintStartDate={candyMachine.mintStartDate} 
      />

      <div className="flex flex-col justify-center items-center mt-20">

        <div className="w-full flex justify-center items-center advertise">
          <div className="flex flex-col md:flex-row">
            <img
              className={width > 768 ? "object-none object-left-bottom top-z-index mb-5" : "object-contain top-z-index mb-5 mx-auto"}
              src={`/images/mmtchi.png`}
              width={width > 758 ? "460px" : "300px"}
              height={width > 768 ? "540px" : "380"}
              alt="MMTCHI" />

            <div className="ml-3 rounded-3xl bg-white overflow-hidden p-3 mb-5 overview-shadow" style={width > 768 ? {width: "430px", height: "619px"} : {width: "90%", height: "fit-content"}}>
              <div className="overview-background-color rounded-2xl space-y-3 pt-12 px-6 pb-6 w-full h-full">
                <p className="text-6xl text-yellow-400 amiga-font color-936 text-center">2200</p>
                <p className="text-xl text-white amiga-font text-center">UNIQUE TAMADODGY</p>
                <p className="text-xl amiga-font color-lightpink text-center">LIVE ON SOLANA</p>
                <p className="text-base text-white leading-4"><b>TamaDodgy</b> is a Walk-To-Breed & Breed-To-Earn NFT Game on the Solana blockchain.</p>
                <p className="text-base text-white leading-4">First generation supply is capped at 2200. Your <b>TamaDodgy</b> allows you to interbreed with other HODLers to get extra DODGY generations of these dodgy creatures.</p>
                <p className="text-base text-white leading-4">In addition, adopting a <b>TamaDodgy</b> gives you access to our <b>TamaDodgy</b> Pet Game, a virtual pet game like Tamagochi but with added old school classic mini games and Walk-To-Breed features so you can lose some weight with your <b>TamaDodgy</b>.</p>
                <p className="text-base text-white leading-4">All <b>TamaDodgy</b> are programmatically generated to include numerous dodgy traits and rarities. All TamaDodgy will be revealed shortly after being minted. </p>
                <p className="text-base text-white leading-4">Dodgy community features will also be activated based on the roadmap. Please also join our dodgy Discord and connect via Grape to show off as the verified owner of <b>TamaDodgy</b>.</p>
              </div>
            </div>
            
            <div className="pt-5 flex flex-row md:flex-col md:space-y-2 mx-auto md:m-0">
              <a href="https://www.discord.gg/wix" target="_blank">
                <img
                  className="object-contain"
                  width="39px"
                  height="39px"
                  src={`/images/discord.png`}
                  alt="MMTCHI" />
              </a>
              <a href="https://www.twitter.com/wix" target="_blank">
                <img
                  className="object-contain"
                  width="39px"
                  height="39px"
                  src={`/images/twitter.png`}
                  style={(width > 768) ? {marginLeft: 0} : {marginLeft: '5px'}}
                  alt="MMTCHI" />
              </a>
            </div>
          </div>
        </div>

        <div className="ribbon hidden lg:flex lg:flex-row relative">
          <div className="flex flex-col space-y-3 w-6/12 ml-60 mt-5">
            <p className="text-3xl text-white amiga-font">
              THE STORY .....
            </p>
            <div className="h-40 overflow-y-auto flex flex-col space-y-1">
              <p className="text-sm text-white leading-4">
                TamaDodgy is inspired by the Millennial childhood Tamagochi Egg Watch handheld digital pet that was created in Japan by Akihiro Yokoi in 1997. They are the spawn of what happens when you have a bunch of 1997 pet creatures mixed with the 2021dodgy pixelated punk world. This lot are looking for a new home and are up for adoption. They were originally going to Ethereum, but they were too dodgy for Vitalik. So the TamaDodgy decided to spawn in the more dodgy island - Solana, the blockchain of every dodgy pixel's dream, by the extra dodgy Sam.
              </p>
              <p className="text-sm text-white leading-4">
                All they need is the right person to adopt them and give them all the dodgy love and care. These TamaDodgy may be dodgy but they have big dreams and their properties uniquely reflect who they are and promise to reward their owners handsomely.
              </p>
            </div>
          </div>
          <div className="start-date-badge flex flex-col space-y-1 justify-center items-center relative ml-16 top-5">
          </div>
        </div>

        <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-3 mt-10 md:ml-20 md:mr-20" id="mint">
          <MintCard 
            title="Baby" 
            image={`/images/BabyDemo.gif`} 
            subtitle="Baby Tamadodgys"
            description="are tiny creatures that moves very slow; their breeding specs are unknown; all backgrounds’ rarity is each at 22.5% with Amelia and Mermaid at 5%; all eggs’ rarity is each at 23.75% with Coral at 5%."
            flow={`/images/420babyloop.gif`}
            frame={`/images/babyeggswatch.png`}
            background={`/images/babyswatch.png`}
          />
          <MintCard 
            title="TODDLER" 
            image={`/images/ToddlerDemo.gif`} 
            subtitle="Toddler Tamadodgys"
            description="are small creatures that moves fairly slow; their breeding probabilities are low but, if successful, will have high rates of rare traits; all backgrounds’ rarity is each at 22.5% with Emerald and Hinode at 5%; all eggs’ rarity is each at 23.75% with Wheat at 5%."
            flow={`/images/420todloop.gif`}
            frame={`/images/toodlereggswatch.png`}
            background={`/images/todswatch.png`}
          />
          <MintCard 
            title="TEEN" 
            image={`/images/TeenDemo.gif`} 
            subtitle="Teenager Tamadodgys"
            description="have the highest breeding rates; they are medium size creatures that moves the quickest; all backgrounds’ rarity is each at 22.5% with Pooh and Taiko at 5%; all eggs’ rarity is each at 23.75% with Candy at 5%."
            flow={`/images/420teenloop.gif`}
            frame={`/images/teeneggswatch.png`}
            background={`/images/teenswatch.png`}
          />
          <div className="col-span-1"></div>
          <MintCard 
            title="ADULT" 
            image={`/images/AdultDemo.gif`} 
            subtitle="Adult Tamadodgys"
            description="if inter-breeded will give rise to extremely dodgy dodgers; they are largest size creatures that moves the slowest; all backgrounds’ rarity is each at 22.5% with Ralph and Frozen at 5%; all eggs’ rarity is each at 23.75% with Calcium at 5%."
            flow={`/images/420adultloop.gif`}
            frame={`/images/adulteggswatch.png`}
            background={`/images/adultswatch.png`}
          />
          <MintCard 
            title="ELDER" 
            image={`/images/ElderDemo.gif`} 
            subtitle="Elder Tamadodgys"
            description="are medium size creatures that move fairly fast; their breeding probabilities are average; rumour has it that interbreeding between Elder Tamadodgys are not possible? all backgrounds’ rarity is each at 22.5% with Watchmen and Evangelion at 5%; all eggs’ rarity is each at 23.75% with Amethyst at 5%."
            flow={`/images/420elderloop.gif`}
            frame={`/images/eldereggswatch.png`}
            background={`/images/elderswatch.png`}
          />
          <div className="col-span-1"></div>
        </div>

        <div className="w-full flex justify-center items-center mt-5 mb-5">
          <div className="button-mint flex justify-center items-center relative">
            <div className="flex flex-col space-y-2">
              <p className="text-center color-lightpink amiga-font text-2xl">MINT</p>
              <p className="text-center color-936 amiga-font text-xl">1SOL</p>
            </div>

            <img src={`/images/left_glue.png`} className="absolute -left-8 -top-8" />
            <img src={`/images/right_glue.png`} className="absolute -right-8 -top-8" />
          </div>
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