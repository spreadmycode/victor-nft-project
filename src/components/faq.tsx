export const Faq = () => {
  return <div className="m-5 relative" id="faq">
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
    </div>;
};
