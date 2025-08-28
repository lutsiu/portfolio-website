import AboutPageTitle from "./AboutPageTitle";

interface Props {
  experienceCompany: string
  experienceTechnologies: string
  experienceTasksList: string[]
}

export default function Experience({
    experienceCompany,
    experienceTasksList, 
    experienceTechnologies}: Props) {

  return (
    <div className="mt-[5rem]">
      <AboutPageTitle title="Experience"/>
      <div className="
                    bg-neutral-800 hover:bg-neutral-900 duration-300 cursor-pointer 
                    rounded-[2rem] px-[2rem] pt-[1rem] pb-[4rem]
                    flex flex-col gap-[0.5rem] w-[70%] mt-[2rem]
                  "
      >
        <h5 className="text-[2rem] font-semibold">{experienceCompany}</h5>
        <h6 className="text-[1.5rem] text-neutral-100">{experienceTechnologies}</h6>
        <ul>
          {experienceTasksList.map((l, i) => {
            return (
              <li 
                key={i}
                className="flex items-center gap-[0.6rem]"
              >
                <div className="bg-purple-600 w-[0.7rem] h-[0.7rem] rounded-full"/>
                <p className="text-neutral-200 text-[1.5rem]">{l}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}