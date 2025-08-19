import ProjectPreviewCard from "@/app/components/HomePage/Projects/ProjectPreviewCard";
import Title from "@/app/components/title";
import projectPreviewDetailsData from "@/app/data/ProjectPreviewDetailsData";

export default function ProjectsSection() {
  
  return (
    <section className="mt-[15rem]">
      <Title title="Projects"/>
      <div className="mt-[2.5rem] grid grid-cols-3 gap-[2rem]">
        {projectPreviewDetailsData.map((pr, i) => {
          return (
            <ProjectPreviewCard key={i} {...pr}/>
          )
        })}
      </div>
    </section>
  )
}