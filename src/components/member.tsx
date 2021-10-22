export const Member = ({
    name,
    image,
    description,
  }: any) => {
  
return <div className="flex flex-col space-y-3 justify-center items-center">
        <img
          src={image}
          className="object-none m-2"
          width="200"
          height="200"
          alt="Member" />
        <p className="text-white text-3xl italic amiga-font">{name}</p>
        <p className="lg:w-full w-9/12 mx-auto leading-6 p-5">{description}</p>
    </div>;
};
  