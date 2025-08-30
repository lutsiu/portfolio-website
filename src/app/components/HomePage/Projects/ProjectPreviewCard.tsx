"use client";

import { ProjectPreviewDetailsType } from "@/app/types/ProjectPreviewDetailsType";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageSkeleton from "@/app/components/ImageSkeleton";

export default function ProjectPreviewCard({
  title,
  imageUrlDekstop, // desktop (≥ md)
  imageUrlMobile,  // mobile (< md)
  description,
  link,
  technologies,
}: ProjectPreviewDetailsType) {
  const [cardIsHovered, setCardIsHovered] = useState(false);
  const [loadedDesktop, setLoadedDesktop] = useState(false);
  const [loadedMobile, setLoadedMobile] = useState(false);

  const showSkeleton = !(loadedDesktop || loadedMobile);

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
        } duration-300 h-[40rem] md:h-[40rem] lg:h-[20rem]`}
      >
        <div className="relative w-full h-full">
          {showSkeleton && (
            <div className="absolute inset-0">
              <ImageSkeleton />
            </div>
          )}

          {/* Mobile image (< md) */}
          <Image
            src={imageUrlMobile}
            alt={title}
            fill
            sizes="(max-width: 767px) 100vw"
            className={`md:hidden w-full h-full rounded-[0.5rem] object-cover transition-opacity duration-300 ${
              loadedMobile ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoadedMobile(true)}
            aria-hidden={loadedMobile ? undefined : true}
          />

          {/* Desktop image (≥ md) */}
          <Image
            src={imageUrlDekstop}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw"
            className={`hidden md:block w-full h-full rounded-[0.5rem] object-cover transition-opacity duration-300 ${
              loadedDesktop ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoadedDesktop(true)}
            aria-hidden={loadedDesktop ? undefined : true}
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
