import { AboutMePageTechnologyType } from "@/app/types/AboutMePageDataType";
import AboutPageTitle from "./AboutPageTitle";
import TechnologyElement from "./TechnologyElement";

interface Props {
  technologies: AboutMePageTechnologyType[]
}

export default function TechnologiesIUse({technologies}: Props) {

  return (
    <div className="mt-[7rem] w-[70%]">
      <AboutPageTitle title="Technologies I use" />
      <ul className="flex flex-col gap-[3rem]">
        {technologies.map((tech, i) => {
          return (
            <TechnologyElement key={i} {...tech}/> 
          )
        })}
      </ul>
    </div>
  )
}