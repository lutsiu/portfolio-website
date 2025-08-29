"use client";

import BottomPart from "@/app/components/CaseStudyPage/BottomPart";
import ProjectExplanation from "@/app/components/CaseStudyPage/ProjectExplanation";
import ProjectScreenshots from "@/app/components/CaseStudyPage/ProjectScreenshots";
import ProjectShortInfo from "@/app/components/CaseStudyPage/ProjectShortInfo";
import ScreensGallery from "@/app/components/CaseStudyPage/ScreensGallery";
import TopPart from "@/app/components/CaseStudyPage/TopPart";
import projectsFullData from "@/app/data/ProjectsFullData";
import { ProjectFullDataType } from "@/app/types/ProjectFullDataType";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function CaseStudyPage() {
  const pathname = usePathname();
  const projectName = pathname.split("/").at(2);

  const [activeImage, setActiveImage] = useState("");

  const data = projectsFullData.find((pr) => pr.id === projectName) as ProjectFullDataType;

  if (!data) {
    return <div className="p-8 text-center text-red-500">Project not found.</div>;
  }

  const {
    title,
    subititle,
    liveLink,
    repoLink,
    designLink,
    technologies,
    context,
    solution,
    impact,
    myRole,
    heroImage,
    screenshots,
  } = data;

  return (
    <>
      <TopPart projectHeroImage={heroImage} projectTitle={title} />

      <ProjectShortInfo
        projectTitle={title}
        projectSubtitle={subititle}
        liveLink={liveLink}
        repoLink={repoLink}
        designLink={designLink}
        technologies={technologies}
      />

      <ProjectExplanation
        context={context}
        solution={solution}
        impact={impact}
        myRole={myRole}
      />

      <ProjectScreenshots 
        screenshots={screenshots}
        setActiveImage={setActiveImage} 
      />

      <BottomPart />

      {activeImage && (
        <ScreensGallery 
          images={data?.screenshots} 
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      )}
    </>
  );
}
