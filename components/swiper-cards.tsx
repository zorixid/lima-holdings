"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import Image from "next/image";

interface SwiperCardsProps {
  images: { url: string; alt: string }[];
}

export const SwiperCards = ({ images }: SwiperCardsProps) => {
  return (
    <div className="w-[190px] h-[220px] sm:w-[220px] sm:h-[300px] lg:w-[180px] lg:h-[270px]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="bg-center">
            <Image
              src={image.url}
              alt={image.alt}
              unoptimized
              className="object-cover w-full h-full"
              width={1920}
              height={1080}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
