"use client";
import { motion } from "framer-motion";

import useTransition from "@/app/hooks/useTransition";

import ProjectPreviewCard from "@/app/components/HomePage/Projects/ProjectPreviewCard";
import Title from "@/app/components/title";
import projectPreviewDetailsData from "@/app/data/ProjectPreviewDetailsData";

export default function ProjectsSection() {
  
  const {initial, animate} = useTransition();
  

  return (
    <motion.section 
      className="mt-[8rem] lg:mt-[15rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}   
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
    </motion.section>
  )
}