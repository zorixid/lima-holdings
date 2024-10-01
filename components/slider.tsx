"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { slidesData } from "@/data";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide className="bg-center bg-cover" key={`slide-${index}`}>
            <Image
              src={slide.url}
              alt={slide.alt}
              unoptimized
              className="object-cover w-full h-full"
              width={1920}
              height={1080}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
