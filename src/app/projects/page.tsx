import ProjectPreviewCard from "@/app/components/HomePage/Projects/ProjectPreviewCard";
import projectPreviewDetailsData from "@/app/data/ProjectPreviewDetailsData";
import Title from "../components/title";

export default function Projects() {
  return (
    <div className="pt-[5rem]">
      <div className="text-center md:text-left">
        <Title title="Projects"/>
      </div>
      <div className="mt-[7rem] grid grid-cols-1 lg:grid-cols-3 gap-[2rem]">
        {projectPreviewDetailsData.map((pr, i) => {
          return (
            <ProjectPreviewCard key={i} {...pr}/>
          )
        })}
      </div>
    </div>
  )
}