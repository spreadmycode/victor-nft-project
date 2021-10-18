export const RoadMap = ({
    title,
    image,
    list,
  }: any) => {

var pList = list.map((item:any, index:number) => {
    return <li className="m-1" key={index}>{item}</li>;
});
  
return <div className="flex md:flex-row sm:flex-col md:w-6/12">
        <img
          src={image}
          className="object-top object-contain"
          alt="RoadMap" />
        <div className="flex md:flex-row sm:flex-col md:w-10/12 border-b-2 border-blue-700">
            <p className="text-7xl text-blue-700 mt-8 mr-5 amiga-font">{title}</p>
            <ul className="list-disc ml-5">{pList}</ul>
        </div>
    </div>;
};
  