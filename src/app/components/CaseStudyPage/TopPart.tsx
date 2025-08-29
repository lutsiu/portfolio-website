"use client";

import Image from "next/image";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";

interface Props {
  projectTitle: string;
  projectHeroImage: string;
}


export default function TopPart({projectHeroImage, projectTitle}: Props) {
  const {initial, animate} = useTransition();

  return (
    <motion.div 
      className="mt-[3rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="mt-[2rem] text-center md:text-left">
        <h2 className="text-[5.5rem] md:text-[8rem] font-bold leading-[120%]">{projectTitle}</h2>
        <h5 className="text-purple-300 text-4xl mt-[2rem]">Case study</h5>
      </div>
      <div className="relative w-full aspect-[16/9] h-[60rem] overflow-hidden rounded-2xl my-[4rem]">
        <Image
          src={`${projectHeroImage}`}
          alt="Case study image"
          fill
          className=""
          sizes="100vw"
          priority
        />
      </div>
    </motion.div>
  )
}