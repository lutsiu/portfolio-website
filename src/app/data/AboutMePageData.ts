import { AboutMePageDataType, AboutMePageTechnologyType } from "../types/AboutMePageDataType";

export const technologiesPageTechnologies: AboutMePageTechnologyType[] = [
  {
    name: "React",
    image: "/technologies/react.svg",
    skill: 90,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    image: "/technologies/nextjs.png",
    skill: 86,
    color: "#ffffff",
  },
  {
    name: "TypeScript",
    image: "/technologies/typescript.svg",
    skill: 90,
    color: "#3178C6",
  },
  {
    name: "Node.js",
    image: "/technologies/node-js.svg",
    skill: 85,
    color: "#339933",
  },
  {
    name: "Spring Boot",
    image: "/technologies/spring-boot.svg",
    skill: 80,
    color: "#6DB33F",
  },
  {
    name: "Java",
    image: "/technologies/java.svg",
    skill: 83,
    color: "#007396",
  },
  {
    name: "MySQL",
    image: "/technologies/mysql.svg",
    skill: 78,
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    image: "/technologies/mongodb.svg",
    skill: 75,
    color: "#47A248",
  },
];

export const aboutMePageData: AboutMePageDataType = {
  shortDescription:
    "Student, traveler, guitarist — and a future-focused full-stack developer.",
    greetingsDescription: `I’m Oleksandr Lutsiuk (Sasha), a full-stack developer and Vistula student. 
                          I build fast, reliable web apps with React/Next.js + TypeScript/Tailwind on the front and Node.js/Express on 
                          the back. At Intercode I shipped a lead-gen site with advanced SEO, i18n, Embla carousels, and a Nodemailer pipeline. Pragmatic and product-minded, 
                          I focus on clear UX, quick LCP, and maintainable typed code. Outside work I travel and play guitar.`,
  resume: "/resume.pdf",

  technologies: technologiesPageTechnologies,

  productMindsetList: [
    "User-first decisions",
    "Simple, measurable outcomes",
    "Bias to ship",
  ],
  qualityAndSpeedList: [
    "Strong TypeScript discipline",
    "Reusable components",
    "Performance budgets as a habit",
  ],
  communicationList: [
    "Clear updates",
    "Written docs",
    "Ownership & initiative",
  ],

  experienceCompany: "Intercode — Full-stack Developer (6 months)",
  experienceTechnologies: `
    Next.js,
    React,
    Node.js/Express,
    TypeScript,
    Tailwind,
  `,
  experienceTasksList: [
    "Built and shipped a lead-generating marketing site with advanced SEO and i18n.",
    "Implemented a reusable UI system in Tailwind; carousels with Embla; popups and CTAs.",
    "Created a contact pipeline (API routes + Nodemailer) with validation and spam guard.",
    "Optimized performance (LCP, image strategy, code-splitting) and accessibility.",
  ],

  languages: [
  "🇬🇧 English — C1",
  "🇵🇱 Polish — B2",
  "🇺🇦 Ukrainian — C1",
  " Russian — C1",
  "🇩🇪 German — A1",
  ],

  focus: [
    "🧑‍💻 Frontend + Backend",
    "🧬 Type-safe codebases",
    "🚀 DX and performance",
    "📱 Mobile first",
  ],

  availability: [
    "🧑‍💼 Open to full-time/contract",
    "🌍 Remote-first; Warsaw timezone",
    "🤝 Freelance friendly",
  ],

  interests: [
    "✈️ Travelling",
    "🎸 Music",
    "📚 Classical literature",
    "🏃‍♂️ Sport",
  ],

};

export default aboutMePageData;
