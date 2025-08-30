"use client";


import Link from "next/link";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";
import SeeMore from "../SeeMoreLink/SeeMoreLink";
export default function BottomPart() {
  const {initial, animate} = useTransition();

  return (
    <motion.div 
      className="mt-[4rem] text-center md:text-left"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h4 className="font-bold text-[3rem]">Want something similar?</h4>
      <p className="text-[2rem] text-neutral-300">{"Let's talk about your idea or role."}</p>
      <Link
         href={{ pathname: "/", hash: "contact" }}
         className="bg-indigo-500 hover:bg-purple-500 duration-300 text-white
                         text-3xl font-semibold flex justify-center items-center
                         rounded-[1rem] px-[2rem] py-[1.3rem] w-fit mt-[2rem] mx-auto md:mx-0">
        Reach me out
      </Link>
      <div className="mt-[3rem]">
        <SeeMore title="Get back to other projects" url="projects" />
      </div>
    </motion.div>
  )
}