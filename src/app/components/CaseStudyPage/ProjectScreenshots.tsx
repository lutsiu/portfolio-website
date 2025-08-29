"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";

interface Props {
  screenshots: string[];
  setActiveImage: Dispatch<SetStateAction<string>>
}

export default function ProjectScreenshots({screenshots, setActiveImage}: Props) {
  const {initial, animate} = useTransition();

  return (
    <motion.div 
      className="mt-[4rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h4 className="text-[4.5rem] font-bold text-center md:text-left">Screenshots</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[2rem] md:gap-[3rem] mt-[2rem]">
        {screenshots.map((img, i) => {
          return (
            <div 
              className="relative w-full aspect-video h-[20rem] overflow-hidden rounded-[2rem] duration-300 hover:scale-105"
              key={i}
            >
              <Image
                src={img}
                alt={`Screenshot ${i}`}
                fill
                className="object-cover cursor-zoom-in"
                onClick={() => setActiveImage(img)}
              />
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}