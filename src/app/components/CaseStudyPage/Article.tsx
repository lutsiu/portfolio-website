"use client";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";
interface Props {
  title: string;
  explanation: string
}

export default function Article({title, explanation} : Props) {

  const {initial, animate} = useTransition();
  
  return (
    <motion.article 
      className="mt-[3rem] text-center md:text-left"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.1 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h4 className="font-bold text-[2.5rem]">{title}</h4>
      <p className="md:w-[66rem] text-neutral-300 text-[1.8rem] mt-[1rem]">{explanation}</p>
    </motion.article>
  )
}