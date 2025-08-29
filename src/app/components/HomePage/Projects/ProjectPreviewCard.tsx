// src/app/components/ProjectPreviewCard.tsx
"use client";

import { ProjectPreviewDetailsType } from "@/app/types/ProjectPreviewDetailsType";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageSkeleton from "@/app/components/ImageSkeleton";

export default function ProjectPreviewCard({
  title,
  imageUrl,
  description,
  link,
  technologies,
}: ProjectPreviewDetailsType) {
  const [cardIsHovered, setCardIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      className="
        bg-zinc-900 rounded-[0.5rem] 
        flex flex-col gap-[2rem] cursor-pointer
        duration-300 hover:bg-zinc-800
        pb-[2rem]
      "
      href={link}
      onMouseEnter={() => setCardIsHovered(true)}
      onMouseLeave={() => setCardIsHovered(false)}
    >
      <div
        className={`${
          cardIsHovered ? "pt-0 px-0" : "pt-[2rem] px-[2rem]"
        } duration-300 h-[30rem] md:h-[40rem] lg:h-[20rem]`}
      >
        <div className="relative w-full h-full">
          {!loaded && <div className="absolute inset-0"><ImageSkeleton /></div>}
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className={`w-full h-full rounded-[0.5rem] object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            aria-hidden={!loaded}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[1.5rem] px-[2rem]">
        <h5 className="text-[2.4rem] text-gray-100">{title}</h5>
        <p className="text-[1.2rem] text-zinc-300">{description}</p>
        <div className="flex gap-[1rem]">
          {technologies.map((t, i) => (
            <div
              key={i}
              className="bg-neutral-800 text-neutral-300 px-[1rem] py-[0.5rem] rounded-[0.5rem]"
            >
              {t}
            </div>
          ))}
        </div>
        <p className="text-indigo-500 text-[1.5rem]">View details</p>
      </div>
    </Link>
  );
}
