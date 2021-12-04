import { RecaptchaButton } from '../components/recaptcha-button';

export const MintCard = ({
  title,
  image,
  subtitle,
  description,
  flow,
  frame,
  background
}: any) => {

  return (
    <div className="m-2 col-span-2">
      <div className="p-5 flex flex-col justify-center items-center flex-1 space-y-0 bg-white mint-card">
        <p className="lg:text-3xl text-xl color-lightpink mb-5 text-center amiga-font">{title}</p>
        <img
            src={image}
            alt="Card" />
      
        <img
          src={'/images/shadow2.png'} />
        <p className="text-sm leading-4 break-normal h-40 overflow-y-auto ml-5 mr-5 text-center">
          <b>{subtitle}</b> {description}
        </p>
        <img
          src={flow} />
        <img
          src={frame} />
        <img
          src={background} />
      </div>
      <img
          src={'/images/shadow.png'} width="100%" />
    </div>
  );
};
