import ProjectPreviewCard from "@/app/components/HomePage/Projects/ProjectPreviewCard";
import Title from "@/app/components/title";
import projectPreviewDetailsData from "@/app/data/ProjectPreviewDetailsData";

export default function ProjectsSection() {
  
  return (
    <section className="mt-[8rem] lg:mt-[15rem]">
      <div className="text-center md:text-left">
        <Title title="Projects"/>
      </div>
      <div className="mt-[2.5rem] grid grid-col-1 lg:grid-cols-3 gap-[2rem]">
        {projectPreviewDetailsData.map((pr, i) => {
          return (
            <ProjectPreviewCard key={i} {...pr}/>
          )
        })}
      </div>
    </section>
  )
}