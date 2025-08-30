"use client";

import Article from "@/app/components/CaseStudyPage/Article";
interface Props {
  context: string;
  solution: string;
  impact: string;
  myRole: string;
}

export default function ProjectExplanation({context, solution, impact, myRole}: Props) {


  return (
    <div 
      className="mt-[4rem]"
    >
      <Article title="Context" explanation={context} />
      <Article title="Solution" explanation={solution} />
      <Article title="Impact" explanation={impact} />
      <Article title="My Role" explanation={myRole} />
    </div>
  )
}