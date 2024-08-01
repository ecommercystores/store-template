"use client";

import { useState, useCallback, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/app/components/Card";
import { blurData } from "@/lib/data";
import "./banner.css";
import img1 from "/public/billboard-bg.png";
import img2 from "/public/billboard-bg-2.png";
import img3 from "/public/billboard-bg-3.png";
import { Button } from "./ui/button";

export function BannerCarousel() {
  // @ts-ignore
  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([0]);

  const scrollTo = useCallback(
    (index: any) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const slides = [img1, img2, img3];
  return (
    <>
      <div className="embla h-full">
        <div
          className="embla__viewport md:rounded-2xl overflow-hidden h-full"
          ref={viewportRef}
        >
          <div className="embla__container h-full">
            {slides.map((image, index) => (
              <div className="embla__slide  h-full" key={index}>
                <Image
                  className="w-full h-full md:rounded-2xl object-cover"
                  src={image}
                  alt="banner"
                  placeholder="blur"
                  blurDataURL={blurData}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
        <h2 className="text-gray-800 font-bold text-2xl lg:text-5xl">
          Shop Products
        </h2>
        <p className=" text-md md:text-xl text-gray-800 my-1">
          Buy out most stylish themed products
        </p>
        <p className="font-bold text-lg text-gray-800">From KES 600</p>
        <Link href="#categories">
          <Button className="flex text-white bg-gray-800 w-32 rounded-lg py-[1.5rem]">
            Shop Now
          </Button>
        </Link>

        <div className="flex justify-center bg-black/20 rounded-3xl gap-3 px-2 py-1.5">
          {scrollSnaps.map((_, index) => (
            <button
              className={`embla__dot rounded-full h-[9px] w-[9px] ${
                index === selectedIndex ? " bg-gray-800" : "bg-white"
              }`}
              type="button"
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const ProductsCarausel = ({ swagList }: { swagList: any[] }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false });

  const [scrollProgress, setScrollProgress] = useState(0);
  const onScroll = useCallback((embla: any) => {
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);
  useEffect(() => {
    if (!embla) return;

    onScroll(embla);
    embla
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [embla, onScroll]);

  return (
    <>
      <div className="embla h-full">
        <div
          className="embla__viewport rounded-2xl overflow-hidden h-full"
          ref={viewportRef}
        >
          <div className="embla__container h-full">
            {swagList?.map((product) => (
              <div
                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] pl-4  h-full"
                key={product.id}
              >
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8">
        <div className="embla__progress bg-gray-800/20 w-full md:w-[28rem] px-4 rounded-md h-1">
          <div
            className="embla__progress__bar bg-gray-800 "
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </>
  );
};
