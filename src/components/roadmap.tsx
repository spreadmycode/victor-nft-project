import { RoadMapItem } from "./roadmapitem";

export const RoadMap = () => {
    return <div className="roadmap flex flex-col justify-center items-center flex-1 mt-10 p-10 space-y-3" id="roadmap">
    <p className="color-lightpink lg:text-6xl md:text-5xl text-3xl text-center mb-5 amiga-font">ROADMAP</p>

    <RoadMapItem
      title="P1"
      list={['September 1 - Team Formed', 'October - Finalizing Artworks Before Launch', 'Mint Date - December 7th, 2021']}
    />
    <RoadMapItem
      title="P2"
      list={['20% Sold - NFT Airdrops to Discord Early Members/Contributors', '80% Sold - Extra DODGY generations to be given birth by the artists; will be made available for HODLers by Breed-To-Earn', '100% Sold - GameFI incentive token backend development to be commenced']}
    />
    <RoadMapItem
      title="P3"
      list={['Walk-to-Breed App Development to be Commenced; Virtual Pet Games Development to be Commenced']}
    />
    <RoadMapItem
      title="P4"
      list={['Liquidity Wallet to be Used to Buy Floor of TamaDodgy NFTs and Participate in Charity/Community Projects', 'Metaverse Collabs']}
    />
  </div>;
};
  
