import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NextImage from "next/image";
import { blurData } from "@/lib/data";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  images: any[];
};

export function Slider({ images }: Props) {
  return (
    <Carousel className="w-[90%] sm:hidden">
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                  <NextImage
                    fill
                    src={urlForImage(item).url()}
                    alt="Image"
                    className="object-cover object-center"
                    placeholder="blur"
                    blurDataURL={blurData}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
