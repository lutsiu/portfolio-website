"use client";
import { motion } from "framer-motion";

import useTransition from "@/app/hooks/useTransition";
import Link from "next/link";

export default function HeroSection() {
  const {initial, animate} = useTransition();

  return (
    <motion.section
      className="relative pt-[10rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-[4rem] md:gap-[2rem] items-center md:items-start ">
        <h1 className="text-[6rem] leading-[100%] text-center md:text-left">Oleksandr Lutsiuk</h1>
        <h4 className="text-[2rem]">Full-Stack Developer</h4>
        <p className="leading-[2.3rem] text-[1.7rem] text-center md:text-left">
          I build fast, responsive, and user-friendly web applications using modern technologies like React, Next.js, Spring Boot and Node.js.
          <br />
          Passionate about turning ideas into real products that solve problems and create value.
        </p>
        <Link href={"/projects"} className="
          bg-purple-600 duration-300 hover:bg-indigo-600 block
          w-fit px-[3rem] py-[1.5rem] rounded-[0.75rem] cursor-pointer text-[1.7rem]">
          View Projects
        </Link>
      </div>

      <div
        className="
          hidden md:block md:absolute top-[3rem] 
          right-auto left-1/2 -translate-x-1/2
          w-[50rem] h-[40rem] 
          bg-gradient-to-br from-purple-600 to-indigo-700 
          rounded-full blur-3xl opacity-40"
      />
    </motion.section>
  );
}
