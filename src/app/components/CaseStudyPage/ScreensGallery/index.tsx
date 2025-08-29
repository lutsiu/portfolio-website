"use client";

import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Carousel from "./Carousel";
import Thumbs from "./Thumbs";
import CarouselButton from "./CarouselButton";

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
        <div className="hidden sm:block">
          <CarouselButton direction="left" onClick={() => emblaApi?.scrollPrev()}/>
        </div>

        <div className="w-[80vw] h-[80vh] relative overflow-hidden rounded-[2rem]">
          <Carousel
            images={images}
            emblaRef={emblaRef}
            initialIndex={initialIndex}
          />
        </div>

        <div className="hidden sm:block">
          <CarouselButton direction="right" onClick={() => emblaApi?.scrollNext()}/>
        </div>
      </div>

      <div className="mx-auto w-fit sm:hidden flex">
        <div className="">
          <CarouselButton direction="left" onClick={() => emblaApi?.scrollPrev()}/>
        </div>
        <div className="">
          <CarouselButton direction="right" onClick={() => emblaApi?.scrollNext()}/>
        </div>
      </div>

      <Thumbs
        images={images}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
}
