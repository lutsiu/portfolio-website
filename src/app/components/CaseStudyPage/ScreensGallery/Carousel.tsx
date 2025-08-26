"use client";

import { EmblaViewportRefType } from "embla-carousel-react";
import Image from "next/image";

type CarouselProps = {
  images: string[];
  emblaRef: EmblaViewportRefType;
  initialIndex: number;
};

export default function Carousel({ images, emblaRef, initialIndex }: CarouselProps) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem]" ref={emblaRef}>
      <div className="flex h-full duration-500">
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="flex-[0_0_100%] h-full duration-500">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Image from gallery ${i + 1}`}
                fill
                className="object-cover"
                sizes="80vw"
                priority={i === initialIndex}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
