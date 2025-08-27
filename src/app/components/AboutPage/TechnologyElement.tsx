import { AboutMePageTechnologyType } from "@/app/types/AboutMePageDataType";
import Image from "next/image";



export default function TechnologyElement({name, image, skill, color}: AboutMePageTechnologyType) {

  return (
    <li>
      <div className="w-[10rem] h-[10rem] relative overflow-hidden">
        <Image 
          src={image}
          alt={name}
          fill
          className="object-content"
        />
      </div>
      <h6>{name}</h6>
      <div>
        <div></div>
      </div>
    </li>
  )
}