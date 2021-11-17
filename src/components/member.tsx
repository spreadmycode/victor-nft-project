export const Member = ({
    name,
    role,
    image,
    description,
  }: any) => {
  
return <div className="flex flex-col space-y-3 items-center text-center">
        <img
          src={image}
          className="object-none m-2"
          width="200"
          height="200"
          alt="Member" />
        <p className="color-lightpink text-xl italic amiga-font text-center h-14">{name}</p>
        <p className="text-black text-sm text-center"><b>{role}</b></p>
        <p className="lg:w-full w-9/12 mx-auto leading-6 p-5 text-center">{description}</p>
    </div>;
};
  