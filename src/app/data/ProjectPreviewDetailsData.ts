import { ProjectPreviewDetailsType } from "../types/ProjectPreviewDetailsType";

const projectPreviewDetailsData: ProjectPreviewDetailsType[] = [
  {
    title: "Intercode",
    imageUrl: "/projects/intercode/intercode-hero.png",
    description: "Next.js project with nice UI for an outsource company.",
    link: "/projects/intercode",
    technologies: ["Next.js", "Tailwind", "TypeScript", "Zustand"]
  },
  {
    title: "Lutsiu.co",
    imageUrl: "/projects/lutsiuco/lutsiu-co-hero.png",
    description: "Portfolio-style company website showcasing services.",
    link: "/projects/lutsiuco",
    technologies: ["React", "Framer Motion", "Tailwind"]
  },
  {
    title: "Deyan",
    imageUrl: "/projects/deyan/deyan-hero.png",
    link: "/projects/deyan",
    description: "Full-stack business app for a car service company.",
    technologies: ["React", "Express.js", "Node.js", "TypeScript"]
  }
  
];

export default projectPreviewDetailsData;
