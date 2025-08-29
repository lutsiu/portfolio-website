"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type ThumbsProps = {
  images: string[];
  activeImage: string;
  setActiveImage: Dispatch<SetStateAction<string>>;
};

export default function Thumbs({ images, activeImage, setActiveImage }: ThumbsProps) {
  return (
    <ul className=" hidden sm:flex w-full flex-wrap justify-center items-center gap-[2rem] mt-[5rem] mx-auto px-[5rem]">
      {images.map((im, i) => {
        const isActive = im === activeImage;
        return (
          <li key={im + i}>
            <div
              className={`w-[10rem] h-[5rem] overflow-hidden relative cursor-pointer duration-300 rounded-[0.5rem] hover:scale-110 ${
                isActive ? "ring-2 ring-white/60" : ""
              }`}
              onClick={() => setActiveImage(im)}
            >
              <Image src={im} alt={`${im}-${i}`} fill className="object-cover" />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
