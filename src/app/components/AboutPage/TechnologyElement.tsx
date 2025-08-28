import { AboutMePageTechnologyType } from "@/app/types/AboutMePageDataType";
import Image from "next/image";



export default function TechnologyElement({name, image, skill, color}: AboutMePageTechnologyType) {

  return (
    <li className="flex flex-col gap-[1rem]">
      <div className="w-[10rem] h-[10rem] relative overflow-hidden">
        <Image 
          src={image}
          alt={name}
          fill
          className="object-content"
        />
      </div>
      <h6 className="text-[2rem] font-medium">{name}</h6>
      <div className="bg-neutral-600 rounded-[1rem]">
        <div 
          className="h-[1rem] rounded-[1rem]"
          style={{backgroundColor: color, width: `${skill}%`}}
        ></div>
      </div>
    </li>
  )
}