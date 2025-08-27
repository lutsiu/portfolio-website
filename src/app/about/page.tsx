import AboutPageHeader from "../components/AboutPage/AboutPageHeader";
import data from "@/app/data/AboutMePageData";
import Greetings from "../components/AboutPage/Greetings";
import TechnologiesIUse from "../components/AboutPage/TechnologiesIUse";
import WhatIBring from "../components/AboutPage/WhatIBring";
import Experience from "../components/AboutPage/Experience";
import AdditionalInfo from "../components/AboutPage/AdditionalInfo";
export default function AboutPage() {

  const {
    shortDescription,
    greetingsDescription,
    resume,
    technologies,
    productMindsetList,
    qualityAndSpeedList,
    communicationList,
    experienceCompany,
    experienceTechnologies,
    experienceTasksList,
    languages,
    focus,
    availability,
    interests
  } = data;

  return (
    <div>
      <AboutPageHeader shortDescription={shortDescription}/>
      <Greetings description={greetingsDescription} resume={resume}/>
      <TechnologiesIUse technologies={technologies}/>
      <WhatIBring 
        productMindsetList={productMindsetList}
        qualityAndSpeedList={qualityAndSpeedList}
        communicationList={communicationList}
      />
      <Experience
        experienceCompany={experienceCompany}
        experienceTechnologies={experienceTechnologies}
        experienceTasksList={experienceTasksList}
      />
      <AdditionalInfo
        languages={languages}
        focus={focus}
        availability={availability}
        interests={interests}
      />
    </div>
  )
}