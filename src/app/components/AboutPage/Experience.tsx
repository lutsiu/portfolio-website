import AboutPageTitle from "./AboutPageTitle";

interface Props {
  experienceCompany: string
  experienceTechnologies: string[]
  experienceTasksList: string[]
}

export default function Experience({
    experienceCompany,
    experienceTasksList, 
    experienceTechnologies}: Props) {

  return (
    <div>
      <AboutPageTitle title="Experience"/>
      <h5>{experienceCompany}</h5>
      <h6>{experienceTechnologies}</h6>
      <ul>
        {experienceTasksList.map((l, i) => {
          return (
            <li 
              key={i}
            >
              {l}
            </li>
          )
        })}
      </ul>
    </div>
  )
}