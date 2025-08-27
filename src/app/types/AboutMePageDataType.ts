
export type AboutMePageTechnologyType = {
  name: string;
  image: string;
  skill: number;
  color: string;
}

export type AboutMePageDataType = {
  shortDescription: string;
  greetingsDescription: string;
  resume: string;
  technologies: AboutMePageTechnologyType[]
  productMindsetList: string[];
  qualityAndSpeedList: string[];
  communicationList: string[];
  experienceCompany: string;
  experienceTechnologies: string[];
  experienceTasksList: string[];
  languages: string[];
  focus: string[],
  availability: string[];
  interests: string[];
}