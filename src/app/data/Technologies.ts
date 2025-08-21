import { TechnologyType } from "../types/TechnologyType";

const technologies: TechnologyType[] = [
  {
    id: "nextjs",
    name: "Next.js",
    icon: "ri:nextjs-fill",
    hover: "hover:text-neutral-900 dark:hover:text-white",
    brandHex: "#000000",
    url: "https://nextjs.org"
  },
  {
    id: "react",
    name: "React",
    icon: "mdi:react",
    hover: "hover:text-sky-400", // ~ #61DAFB
    brandHex: "#61DAFB",
    url: "https://react.dev"
  },
  {
    id: "node",
    name: "Node.js",
    icon: "mdi:nodejs",
    hover: "hover:text-green-600", // ~ #339933
    brandHex: "#339933",
    url: "https://nodejs.org"
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: "akar-icons:typescript-fill",
    hover: "hover:text-blue-600", // ~ #3178C6
    brandHex: "#3178C6",
    url: "https://www.typescriptlang.org"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "mdi:tailwind",
    hover: "hover:text-sky-400", // ~ #38BDF8
    brandHex: "#38BDF8",
    url: "https://tailwindcss.com"
  },
  {
    id: "java",
    name: "Java",
    icon: "ri:java-fill",
    hover: "hover:text-sky-700", // ~ #007396
    brandHex: "#007396",
    url: "https://www.java.com"
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "lineicons:mysql",
    hover: "hover:text-sky-800", // ~ #00618A
    brandHex: "#00618A",
    url: "https://www.mysql.com"
  }
];

export default technologies;