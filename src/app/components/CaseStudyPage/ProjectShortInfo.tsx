import Link from "next/link";

interface Props {
  projectTitle: string;
  projectSubtitle: string;
  liveLink: string;
  repoLink: string;
  designLink?: string;
  technologies: string[];
  
}

export default function ProjectShortInfo(
    {projectSubtitle, projectTitle, liveLink, 
    repoLink, designLink, technologies}: Props) {

  return (
    <div className="mt-[4rem] text-center md:text-left">
      <h1 className="font-bold text-[8rem] leading-[110%]">{projectTitle}</h1>
      <h4 className="text-3xl text-neutral-300">{projectSubtitle}</h4>
      <ul className="flex flex-row justify-center md:justify-start gap-[1rem] my-[3rem]">
        <li>
          <Link 
            href={`${liveLink}`}
            className="bg-indigo-500 hover:bg-purple-500 duration-300 text-white
                         text-3xl font-semibold flex justify-center items-center
                         rounded-[1rem] px-[2rem] py-[1.3rem] w-[10rem]"
          >
            Live
          </Link>
        </li>
        <li>
          <Link 
            href={`${repoLink}`}
            className="bg-indigo-500 hover:bg-purple-500 duration-300 text-white
                         text-3xl font-semibold flex justify-center items-center
                         rounded-[1rem] px-[2rem] py-[1.3rem] w-[10rem]"
          >
            Repo
          </Link>
        </li>
        {designLink && (
          <li>
            <Link 
              href={`${designLink}`}
              className="bg-indigo-500 hover:bg-purple-500 duration-300 text-white
                         text-3xl font-semibold flex justify-center items-center
                         rounded-[1rem] px-[2rem] py-[1.3rem] w-[10rem]"
            >
              Design
            </Link>
          </li>
        )}
      </ul>
      <ul className="grid grid-cols-3 mx-auto md:mx-0  gap-[1.3rem] w-fit">
        {technologies.map((d, i) => {
          return (
            <li
              key={i}
              className="rounded-[1rem] border border-neutral-500 px-[1rem] 
                        py-[0.5rem] hover:scale-110 hover:bg-indigo-500 cursor-pointer duration-300
                        text-[1.5rem] w-[12rem] text-center
                        "
            >
              {d}
            </li>
          )
        })}
      </ul>
    </div>
  )
}