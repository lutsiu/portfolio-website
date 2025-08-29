"use client";

import { useEffect, useState } from "react";
import BottomPart from "@/app/components/CaseStudyPage/BottomPart";
import ProjectExplanation from "@/app/components/CaseStudyPage/ProjectExplanation";
import ProjectScreenshots from "@/app/components/CaseStudyPage/ProjectScreenshots";
import ProjectShortInfo from "@/app/components/CaseStudyPage/ProjectShortInfo";
import ScreensGallery from "@/app/components/CaseStudyPage/ScreensGallery";
import TopPart from "@/app/components/CaseStudyPage/TopPart";
import projectsFullData from "@/app/data/ProjectsFullData";
import { ProjectFullDataType } from "@/app/types/ProjectFullDataType";
import { usePathname } from "next/navigation";

// Tailwind md breakpoint = 768px
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMdUp("matches" in e ? e.matches : (e as MediaQueryList).matches);

    setIsMdUp(mq.matches);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @typescript-eslint/no-explicit-any
    mq.addEventListener?.("change", onChange as (e: Event) => void) ?? mq.addListener(onChange as any);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @typescript-eslint/no-explicit-any
      mq.removeEventListener?.("change", onChange as (e: Event) => void) ?? mq.removeListener(onChange as any);
    };
  }, []);
  return isMdUp;
}

export default function CaseStudyPage() {
  const pathname = usePathname();
  const projectName = pathname.split("/").at(2);
  const [activeImage, setActiveImage] = useState("");

  const data = projectsFullData.find((pr) => pr.id === projectName) as ProjectFullDataType | undefined;
  const isMdUp = useIsMdUp();

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
    heroImageDesktop,
    heroImageMobile,
    screenshotsDekstop,
    screenshotsMobile,
  } = data;

  const heroSrc = isMdUp ? heroImageDesktop : heroImageMobile;
  const shots = isMdUp ? screenshotsDekstop : screenshotsMobile;

  return (
    <>
      <TopPart projectHeroImage={heroSrc} projectTitle={title} />

      <ProjectShortInfo
        projectTitle={title}
        projectSubtitle={subititle}
        liveLink={liveLink}
        repoLink={repoLink}
        designLink={designLink}
        technologies={technologies}
      />

      <ProjectExplanation context={context} solution={solution} impact={impact} myRole={myRole} />

      <ProjectScreenshots screenshots={shots} setActiveImage={setActiveImage} />

      <BottomPart />

      {activeImage && (
        <ScreensGallery images={shots} activeImage={activeImage} setActiveImage={setActiveImage} />
      )}
    </>
  );
}
