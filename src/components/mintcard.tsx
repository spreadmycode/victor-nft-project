import { RecaptchaButton } from '../components/recaptcha-button';

export const MintCard = ({
  title,
  image,
  description,
  price,
  onMint,
  onPackMint,
  isSoldOut,
  isMinting,
  isActive,
  nftsData,
}: any) => {

  let buttonClassName = "flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-36";
  let disabled = isMinting || isSoldOut || !isActive;
  if (disabled) {
    buttonClassName = "flex justify-center items-center bg-blue-500 text-white font-bold py-2 px-4 opacity-50 rounded-full cursor-not-allowed w-36";
  }

  let buttonContent: any = "MINT";
  if (isMinting) {
    buttonContent = <div>
      <div style={{borderTopColor: "transparent"}}
        className="w-8 h-8 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
    </div>;
  }

  if (isSoldOut) {
    buttonContent = "SOLD OUT";
  }
  
  if (!isActive) {
    buttonContent = "NOT YET";
  }

  return <div className="m-2 col-span-2 p-5 flex flex-col justify-center items-center flex-1 space-y-3 bg-white rounded-lg mint-card">
      <p className="lg:text-3xl text-xl text-blue-400 text-center amiga-font color-lightcyan">{title}</p>
      <img
          src={image}
          alt="Card" />
      <p className="text-sm leading-4 break-normal h-28 overflow-y-auto ml-5 mr-5 text-center">
        {description}
      </p>
      {isActive && 
        <p className="text-blue-500 text-center">
          {nftsData.itemsRedeemed} / {nftsData.itemsAvailable}
        </p>
      }
      <div className="flex flex-row items-center">
        <img
          src={`/images/sol icon.webp`}
          alt="Card" />
        <p className="ml-3">{price}</p>
      </div>
      <button
        className={buttonClassName}
        onClick={onMint}
        disabled={disabled}
      >
        {buttonContent}
      </button>
    </div>;
};
