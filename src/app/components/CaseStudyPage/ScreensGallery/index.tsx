"use client";

import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Carousel from "./Carousel";
import Thumbs from "./Thumbs";

interface Props {
  images: string[];
  activeImage: string;
  setActiveImage: Dispatch<SetStateAction<string>>;
}

export default function ScreensGallery({ images, activeImage, setActiveImage }: Props) {
  // Start from the clicked image
  const initialIndex = useMemo(() => {
    const idx = images.findIndex((src) => src === activeImage);
    return idx >= 0 ? idx : 0;
  }, [images, activeImage]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
    startIndex: initialIndex,
  });

  // Esc close + arrow navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveImage("");
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [emblaApi, setActiveImage]);

  // Keep parent state in sync with current slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const i = emblaApi.selectedScrollSnap();
      const next = images[i];
      if (next) setActiveImage(next);
    };
    emblaApi.on("select", onSelect);
    emblaApi.scrollTo(initialIndex, true);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, images, initialIndex, setActiveImage]);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm overflow-y-scroll pb-[3rem]">
      <Icon
        icon="material-symbols-light:close"
        width="40"
        height="40"
        className="absolute top-[2rem] right-[2rem] cursor-pointer"
        onClick={() => setActiveImage("")}
      />

      <div className="flex items-center justify-center gap-[3rem] w-full h-full">
        <Icon
          icon="material-symbols-light:chevron-left-rounded"
          width="50"
          height="50"
          className="cursor-pointer duration-300 hover:text-neutral-300"
          onClick={() => emblaApi?.scrollPrev()}
        />

        <div className="w-[80vw] h-[80vh] relative overflow-hidden rounded-[2rem]">
          <Carousel
            images={images}
            emblaRef={emblaRef}
            initialIndex={initialIndex}
          />
        </div>

        <Icon
          icon="material-symbols-light:chevron-right-rounded"
          width="50"
          height="50"
          className="cursor-pointer duration-300 hover:text-neutral-300"
          onClick={() => emblaApi?.scrollNext()}
        />
      </div>

      <Thumbs
        images={images}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
}
