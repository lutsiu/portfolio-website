"use client";

import ProjectPreviewCard from "@/app/components/HomePage/Projects/ProjectPreviewCard";
import projectPreviewDetailsData from "@/app/data/ProjectPreviewDetailsData";
import Title from "../components/title";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";

export default function Projects() {
  const {initial, animate} = useTransition();
  
  return (
    <motion.div 
      className="pt-[5rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
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
    </motion.div>
  )
}