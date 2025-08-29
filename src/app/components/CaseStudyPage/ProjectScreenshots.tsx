"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  screenshots: string[];
  setActiveImage: Dispatch<SetStateAction<string>>
}

export default function ProjectScreenshots({screenshots, setActiveImage}: Props) {

  return (
    <div className="mt-[4rem]">
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
    </div>
  )
}