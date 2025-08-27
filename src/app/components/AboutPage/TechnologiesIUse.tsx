import { AboutMePageTechnologyType } from "@/app/types/AboutMePageDataType";
import AboutPageTitle from "./AboutPageTitle";
import TechnologyElement from "./TechnologyElement";

interface Props {
  technologies: AboutMePageTechnologyType[]
}

export default function TechnologiesIUse({technologies}: Props) {

  return (
    <div>
      <AboutPageTitle title="Technologies I use" />
      <ul>
        {technologies.map((tech, i) => {
          return (
            <TechnologyElement key={i} {...tech}/> 
          )
        })}
      </ul>
    </div>
  )
}