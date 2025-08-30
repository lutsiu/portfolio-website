import { ProjectPreviewDetailsType } from "../types/ProjectPreviewDetailsType";

const projectPreviewDetailsData: ProjectPreviewDetailsType[] = [
  {
    title: "Intercode",
    imageUrlDekstop: "/projects/intercode/intercode-hero.png",
    imageUrlMobile: "/projects/intercode/intercode-mobile-hero.png",
    description: "Next.js project with nice UI for an outsource company.",
    link: "/projects/intercode",
    technologies: ["Next.js", "Tailwind", "TypeScript", "Zustand"]
  },
  {
    title: "Lutsiu.co",
    imageUrlDekstop: "/projects/lutsiuco/lutsiuco-hero.png",
    imageUrlMobile: "/projects/lutsiuco/lutsiuco-mobile-hero.png",
    description: "Portfolio-style company website showcasing services.",
    link: "/projects/lutsiuco",
    technologies: ["React", "Framer Motion", "Tailwind"]
  },
  {
    title: "Deyan",
    imageUrlDekstop: "/projects/deyan/deyan-hero.png",
    imageUrlMobile: "/projects/deyan/deyan-mobile-hero.png",
    link: "/projects/deyan",
    description: "Full-stack business app for a car service company.",
    technologies: ["React", "Express.js", "Node.js", "TypeScript"]
  }
  
];

export default projectPreviewDetailsData;
