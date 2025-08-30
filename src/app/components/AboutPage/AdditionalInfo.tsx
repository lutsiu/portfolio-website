"use client";

import AboutPageTitle from "./AboutPageTitle";
import AdditionalInfoCard from "./AdditionalInfoCard";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";

interface Props {
  languages: string[]
  focus: string[]
  availability: string[]
  interests: string[]
}

export default function AdditionalInfo({
  languages, focus, 
  availability, interests}: Props) {

  
  const {initial, animate} = useTransition();

  return (
    <motion.div 
      className="mt-[5rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <AboutPageTitle title="Additional info"/>
      <div className="grid grid-cols-2 gap-[2rem]">
        <AdditionalInfoCard
          title="Languages"
          list={languages}
        />
        <AdditionalInfoCard
          title="Focus"
          list={focus}
        />
        <AdditionalInfoCard
          title="Availability"
          list={availability}
        />
        <AdditionalInfoCard
          title="Interests"
          list={interests}
        />
      </div>
    </motion.div>
  )
}