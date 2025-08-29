import { AboutMePageTechnologyType } from "@/app/types/AboutMePageDataType";
import AboutPageTitle from "./AboutPageTitle";
import TechnologyElement from "./TechnologyElement";

interface Props {
  technologies: AboutMePageTechnologyType[]
}

export default function TechnologiesIUse({technologies}: Props) {

  return (
    <div className="mt-[7rem] w-full">
      <div className="text-center md:text-left">
        <AboutPageTitle title="Technologies I use" />
      </div>
      <ul className="flex flex-col md:items-start gap-[3rem] w-[80%] md:w-[70%] mt-[3rem]">
        {technologies.map((tech, i) => {
          return (
            <TechnologyElement key={i} {...tech}/> 
          )
        })}
      </ul>
    </div>
  )
}