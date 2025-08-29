"use client";

import { AboutMePageTechnologyType } from "@/app/types/AboutMePageDataType";
import AboutPageTitle from "./AboutPageTitle";
import TechnologyElement from "./TechnologyElement";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";


interface Props {
  technologies: AboutMePageTechnologyType[]
}

export default function TechnologiesIUse({technologies}: Props) {
  const {initial, animate} = useTransition();

  return (
    <motion.div 
      className="mt-[7rem] w-full"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="text-center md:text-left">
        <AboutPageTitle title="Technologies I use" />
      </div>
      <ul className="flex flex-col md:items-start gap-[3rem] w-[80%] md:w-[70%] mt-[3rem]">
        {technologies.map((tech, i) => {
          return (
            <TechnologyElement key={i} {...tech}/> 
          )
        })}
      </ul>
    </motion.div>
  )
}