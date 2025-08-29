"use client";

import { useEffect, useState } from "react";
import { EmblaViewportRefType } from "embla-carousel-react";
import Image from "next/image";
import ImageSkeleton from "@/app/components/ImageSkeleton";

type CarouselProps = {
  images: string[];
  emblaRef: EmblaViewportRefType;
  initialIndex: number;
};

export default function Carousel({ images, emblaRef, initialIndex }: CarouselProps) {
  const [loaded, setLoaded] = useState<boolean[]>(() => Array(images.length).fill(false));

  useEffect(() => {
    setLoaded(Array(images.length).fill(false));
  }, [images]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem]" ref={emblaRef}>
      <div className="flex h-full duration-500">
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="flex-[0_0_100%] h-full duration-500">
            <div className="relative w-full h-full">
              {!loaded[i] && <div className="absolute inset-0"><ImageSkeleton /></div>}
              <Image
                src={src}
                alt={`Image from gallery ${i + 1}`}
                fill
                className="object-cover"
                sizes="80vw"
                priority={i === initialIndex}
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
          </div>
        ))}
      </div>
    </div>
  );
}
