import ProjectPreviewCard from "@/app/components/HomePage/Projects/ProjectPreviewCard";
import projectPreviewDetailsData from "@/app/data/ProjectPreviewDetailsData";

export default function Projects() {
  return (
    <div>
      <div className="mt-[7rem] grid grid-cols-3 gap-[2rem]">
        {projectPreviewDetailsData.map((pr, i) => {
          return (
            <ProjectPreviewCard key={i} {...pr}/>
          )
        })}
      </div>
    </div>
  )
}