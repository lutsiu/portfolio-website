import Image from "next/image";
import AboutPageTitle from "./AboutPageTitle";
import me from "../../../../public/me.jpg";


interface Props {
  description: string;
  resume: string;
}

export default function Greetings({description, resume}: Props) {

  return (
    <div className="mt-[5rem] flex items-center gap-[8rem]">
      <div className="flex flex-col gap-[2rem]">
        <AboutPageTitle title="Hi, I'm Oleksandr Lutsiuk"/>
        <p className="text-[1.8rem] max-[66rem] ">
          {description}
        </p>
        <button className="
          bg-purple-500 
          hover:bg-indigo-500 
          duration-300 py-[1.2rem] px-[1.7rem]
          rounded-[0.5rem] text-[1.7rem] font-semibold w-fit
          cursor-pointer
        ">
          Download Resume
        </button>
      </div>
      <div>
        <div
          className="w-[30rem] h-[30rem] rounded-full relative overflow-hidden"
        >
          <Image
            src={me}
            alt="My image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}