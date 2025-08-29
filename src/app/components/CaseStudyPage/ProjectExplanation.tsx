"use client";

import Article from "@/app/components/CaseStudyPage/Article";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";
interface Props {
  context: string;
  solution: string;
  impact: string;
  myRole: string;
}

export default function ProjectExplanation({context, solution, impact, myRole}: Props) {

  const {initial, animate} = useTransition();

  return (
    <motion.div 
      className="mt-[4rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Article title="Context" explanation={context} />
      <Article title="Solution" explanation={solution} />
      <Article title="Impact" explanation={impact} />
      <Article title="My Role" explanation={myRole} />
    </motion.div>
  )
}