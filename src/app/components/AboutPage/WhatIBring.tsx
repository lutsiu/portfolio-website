"use client";

import AboutPageTitle from "./AboutPageTitle";
import WhatIBringCard from "./WhatIBringCard";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";
interface Props {
  productMindsetList: string[];
  qualityAndSpeedList: string[];
  communicationList: string[];
}

export default function WhatIBring({
  productMindsetList, 
  qualityAndSpeedList, 
  communicationList}: Props) {
  const {initial, animate} = useTransition();

  return (
    <motion.div 
      className="mt-[7rem]"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}   
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="text-center md:text-left">
        <AboutPageTitle title="What I bring"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-[3rem] mt-[3rem]">
        <WhatIBringCard 
          title="Product mindset"
          list={productMindsetList}  
        />
        <WhatIBringCard 
          title="Quality & Speed"
          list={qualityAndSpeedList}  
        />
        <WhatIBringCard 
          title="Communication"
          list={communicationList}  
        />
      </div>
    </motion.div>
  )
}