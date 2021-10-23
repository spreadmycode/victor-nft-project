import { Member } from './member';
export const Members = () => {
    return <div className="flex flex-col justify-center items-center flex-1 mt-5 mb-10">
        <p className="text-pink-400 lg:text-7xl md:text-5xl text-4xl text-center amiga-font mt-5">TEAM MEMBERS</p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-5 lg:w-9/12">
        <Member
            image={`/images/kilibe.webp`}
            name="Kilibe"
            description="Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go-to font for titles, paragraphs & more."
        />
        <Member
            image={`/images/nana.webp`}
            name="Nana"
            description="Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go-to font for titles, paragraphs & more."
        />
        <Member
            image={`/images/k9.webp`}
            name="K9"
            description="Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go-to font for titles, paragraphs & more."
        />
        <Member
            image={`/images/Jade.webp`}
            name="Jade"
            description="Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go-to font for titles, paragraphs & more."
        />
        </div>
    </div>;
  };
  