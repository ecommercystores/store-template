"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import GalleryTab from "./gallery-tab";
import { Slider } from "./carousel";
import { blurData } from "@/lib/data";
import { urlForImage } from "@/sanity/lib/image";

interface GalleryProps {
  images: any[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image, i) => (
            <GalleryTab key={i} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square hidden sm:block w-full">
        {images.map((image, i) => (
          <Tab.Panel key={i}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <NextImage
                fill
                src={urlForImage(image).url()}
                alt="Image"
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL={blurData}
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>

      <Slider images={images} />
    </Tab.Group>
  );
};

export default Gallery;
