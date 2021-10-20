export const MintCard = ({
  title,
  image,
  description,
  gifImage,
  price,
  onClick,
  disabled,
}: any) => {

  return <div className="m-2 col-span-2 p-5 flex flex-col justify-center items-center flex-1 space-y-3 bg-white rounded-lg mint-card">
      <p className="text-3xl text-blue-400 text-center amiga-font color-lightcyan">{title}</p>
      <img
          src={image}
          alt="Card" />
      <p className="text-sm leading-4 break-normal ml-5 mr-5 text-center">
        {description}
      </p>
      {gifImage &&
      <img
          className="object-contain"
          width="150"
          height="150"
          src={gifImage}
          alt="Card" />
      }
      <div className="flex flex-row items-center">
        <img
          src={`/images/sol icon.webp`}
          alt="Card" />
        <p className="ml-3">{price}</p>
      </div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-6/12"
        onClick={onClick}
        disabled={disabled}
      >
        MINT
      </button>
    </div>;
};
