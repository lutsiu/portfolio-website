"use client";

import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";

interface Props {
  shortDescription: string;
}

export default function AboutPageHeader({shortDescription}: Props) {
  const {initial, animate} = useTransition();

  return (
    <motion.header 
      className="mt-[5rem] text-center md:text-left"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-[7rem] font-bold leading-[110%]">About me</h1>
      <h6 className="text-[2rem] leading-[110%] text-neutral-300 font-medium mt-[2rem]">{shortDescription}</h6>
    </motion.header>
  )
}