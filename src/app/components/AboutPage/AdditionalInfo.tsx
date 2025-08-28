import AboutPageTitle from "./AboutPageTitle";
import AdditionalInfoCard from "./AdditionalInfoCard";

interface Props {
  languages: string[]
  focus: string[]
  availability: string[]
  interests: string[]
}

export default function AdditionalInfo({
  languages, focus, 
  availability, interests}: Props) {

  return (
    <div className="mt-[5rem]">
      <AboutPageTitle title="Additional info"/>
      <div className="grid grid-cols-2 gap-[2rem]">
        <AdditionalInfoCard
          title="Languages"
          list={languages}
        />
        <AdditionalInfoCard
          title="Focus"
          list={focus}
        />
        <AdditionalInfoCard
          title="Availability"
          list={availability}
        />
        <AdditionalInfoCard
          title="Interests"
          list={interests}
        />
      </div>
    </div>
  )
}