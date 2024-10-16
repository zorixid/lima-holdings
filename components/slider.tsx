"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image from "next/image";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider({
  direction = "horizontal",
  navigation = true,
  slidesData,
}: {
  direction: "vertical" | "horizontal";
  navigation: boolean;
  slidesData: { url: string; alt: string }[];
}) {
  return (
    <>
      <Swiper
        direction={direction}
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        navigation={navigation}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
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
