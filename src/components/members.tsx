import { Member } from './member';
export const Members = () => {
    return <div className="flex flex-col justify-center items-center flex-1 mt-5 mb-10">
        <p className="text-pink-400 lg:text-7xl md:text-5xl text-4xl text-center amiga-font mt-5">TEAM MEMBERS</p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5 lg:w-9/12 members-background">
        <Member
            image={`/images/k9.webp`}
            name="K9999"
            role="Design Lead"
            description="Extremely dodgy guy; never on time; rarely working; extremely secretive; sky is the limit of his weirdo designs; love fusing 2D with 3D and collading new colors with old school classics; came from Mars and is now temporarily living on earth with the Tamadodgys."
        />
        <Member
            image={`/images/kilibe.webp`}
            name="Nat Diaz"
            role="Business Development Lead"
            description="Has many friends in the Solana world; good with finding new friends to collaborate for Tamadodgys; herself not very dodgy but is slowly being influenced by K9 to become more dodgy by day; has many dodgy plans for Tamadodgys."
        />
        <Member
            image={`/images/nana.webp`}
            name="Kelly Blanco"
            role="Marketing Lead"
            description="Extremely dodgy; has zero friend virtually or in reality; Hopefully can think of some ways to market Tamadodgys before they are launched; has many crazy ideas as to the future of Tamadodgys."
        />
        <Member
            image={`/images/Jade.webp`}
            name="Julian Martin"
            role="Operation Lead"
            description="Super not dodgy; she doesn’t even know why she’s part of the dodgy team; goal is to make sure everything is and stays silky dodgy but also silky smooth."
        />
        </div>
    </div>;
  };
  