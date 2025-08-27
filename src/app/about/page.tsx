import AboutPageHeader from "../components/AboutPage/AboutPageHeader";
import data from "@/app/data/AboutMePageData";
import Greetings from "../components/AboutPage/Greetings";
import TechnologiesIUse from "../components/AboutPage/TechnologiesIUse";
import WhatIBring from "../components/AboutPage/WhatIBring";
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

      <div>
        <h4>Experience</h4>
        <div>
          <h3>Intercode - Full stack developer (since May 2025)</h3>
          <p>List of technologies</p>
          <ul>
            list of achievements
          </ul>
        </div>
      </div>

      <div>
        <h4>Additional Info</h4>
        <div>
          Languages
        </div>
        <div>
          Focus
        </div>
        <div>
          Availability
        </div>
        <div>
          Interests
        </div>
      </div>
    </div>
  )
}