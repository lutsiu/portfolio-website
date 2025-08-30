"use client";

import Image from "next/image";
import AboutPageTitle from "./AboutPageTitle";
import me from "../../../../public/me.jpg";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";

interface Props {
  description: string;
  resume: string;
}

export default function Greetings({description, resume}: Props) {
  const {initial, animate} = useTransition();

  function handleDownload() {
    const link = document.createElement("a");
    link.href = resume;
    link.download = resume.split("/").pop() || "resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <motion.div 
      className="mt-[5rem] flex flex-col md:flex-row items-center gap-[5rem] md:gap-[8rem] text-center md:text-left"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-[2rem]">
        <AboutPageTitle title="Hi, I'm Oleksandr Lutsiuk"/>
        <p className="text-[1.8rem] max-[66rem] ">
          {description}
        </p>
        <button 
          onClick={handleDownload}
          className="
          bg-purple-500 
          hover:bg-indigo-500 
          duration-300 py-[1.2rem] px-[1.7rem]
          rounded-[0.5rem] text-[1.7rem] font-semibold w-fit
          cursor-pointer mx-auto md:mx-0
        ">
          Download Resume
        </button>
      </div>
      <div>
        <div
          className="w-[30rem] h-[30rem] rounded-full relative overflow-hidden"
        >
          <Image
            src={me}
            alt="My image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}