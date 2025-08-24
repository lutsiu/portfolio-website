import BottomPart from "@/app/components/CaseStudyPage/BottomPart";
import ProjectExplanation from "@/app/components/CaseStudyPage/ProjectExplanation";
import ProjectScreenshots from "@/app/components/CaseStudyPage/ProjectScreenshots";
import ProjectShortInfo from "@/app/components/CaseStudyPage/ProjectShortInfo";
import TopPart from "@/app/components/CaseStudyPage/TopPart";

export default function CaseStudyPage() {

  const DUMMY_ARRAY = [
    "Mobile first", "Node.js",
    "Typescript", "React",
    "Spring Boot", "Express.js"
  ];

  const lorem =
    `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium, 
        libero fuga laudantium deserunt natus molestias
         aliquid cupiditate laborum? Cupiditate saepe placeat quis 
        officiis asperiores. Aperiam aliquam vero illum itaque.
    `;
  const DUMMY_IMAGES = Array(9).fill("/cat.png");

  return (
    <>
      <TopPart projectHeroImage={`${"/cat.png"}`} projectTitle={`${"Title"}`} />
      <ProjectShortInfo
        projectTitle={`${"Title"}`}
        projectSubtitle={`${"Project subtitle oiejrgjergerjngoeijrgroi jogij ergiojkno jerogij oinjergonerkogn oiergerg"}`}
        liveLink={`${"/link"}`}
        repoLink={`${"/link"}`}
        designLink={`${"/link"}`}
        technologies={DUMMY_ARRAY}
      />

      <ProjectExplanation 
        context={`${lorem}`} 
        solution={`${lorem}`} 
        impact={`${lorem}`}
        myRole={`${lorem}`}
      />
      <ProjectScreenshots screenshots={DUMMY_IMAGES}/>

      <BottomPart/>
    </>
  )
}