import ContactForm from "./sections/Home/ContactForm";
import HeroSection from "./sections/Home/Hero";
import ProjectsSection from "./sections/Home/Projects";
import TechnologiesSection from "./sections/Home/Technologies";
import WhoAmISection from "./sections/Home/WhoAmI";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ProjectsSection/>
      <WhoAmISection/>
      <TechnologiesSection/>
      <ContactForm/>
    </>
  );
}
