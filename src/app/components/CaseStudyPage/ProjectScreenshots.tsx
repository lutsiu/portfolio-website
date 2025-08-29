"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";
import ImageSkeleton from "@/app/components/ImageSkeleton";

interface Props {
  screenshots: string[];
  setActiveImage: Dispatch<SetStateAction<string>>;
}

export default function ProjectScreenshots({ screenshots, setActiveImage }: Props) {
  const { initial, animate } = useTransition();
  const [loaded, setLoaded] = useState<boolean[]>(() => Array(screenshots.length).fill(false));

  useEffect(() => {
    setLoaded(Array(screenshots.length).fill(false));
  }, [screenshots]);

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
              {!loaded[i] && <div className="absolute inset-0"><ImageSkeleton /></div>}
              <Image
                src={img}
                alt={`Screenshot ${i}`}
                fill
                className="object-cover cursor-zoom-in"
                onClick={() => setActiveImage(img)}
                onLoad={() =>
                  setLoaded((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  })
                }
                style={{ opacity: loaded[i] ? 1 : 0 }}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
