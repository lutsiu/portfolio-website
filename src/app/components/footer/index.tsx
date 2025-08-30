"use client";

import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";
import FooterCopyright from "./FooterCopyright";
import FooterNavigation from "./FooterNavigation";


export default function Footer() {
  const {initial, animate} = useTransition();

  return (
    <motion.footer 
      className="bg-black/70 text-white flex flex-col mt-[8rem] lg:mt-[15rem] pb-[2rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <FooterNavigation/>
      <FooterCopyright/>
    </motion.footer>
  )
}