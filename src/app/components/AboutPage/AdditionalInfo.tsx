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
    <div>
      <AboutPageTitle title="Additional info"/>
      <div>
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