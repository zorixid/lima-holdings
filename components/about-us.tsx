"use client";

import Image from "next/image";
import Link from "next/link";
import { aboutSections, groupLogos } from "@/data";
import { SwiperCards } from "./swiper-cards";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";
import Slider from "./slider";

export const AboutUs = () => {
  const { isLargeScreen } = useIsLargeScreen();

  return (
    <div className="space-y-20">
      <div className="max-w-[600px] lg:max-w-full w-full mx-auto space-y-16 lg:space-y-20">
        {aboutSections.map((el, index) => {
          return (
            <div
              key={`about-${index}`}
              className={`flex flex-col gap-10 items-center justify-between ${
                index % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div
                className={`w-full mx-auto h-[250px] sm:h-[350px] lg:flex-1 ${
                  index % 2 ? "" : ""
                }`}
                key={`swiper-${index}-${isLargeScreen}`}
              >
                <Slider
                  direction={!isLargeScreen ? "horizontal" : "vertical"}
                  navigation={false}
                  slidesData={el.images}
                />
              </div>
              <div className="space-y-8 lg:flex-1 text-center">
                <h4 className="text-xl font-bold">{el.title}</h4>
                <p className="text-md text-justify leading-6 sm:leading-7">
                  {el.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <Image
          src="/logo-3.png"
          alt="Company Logo"
          className="bg-[aliceblue] p-5 rounded-lg w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] md:p-2 mx-auto"
          layout="intrinsic"
          width={1350}
          height={1350}
          unoptimized
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
        {groupLogos.map((el, index) => {
          return (
            <div className="mb-5" key={index}>
              <Link href={el.externalLink}>
                <Image
                  src={el.imageSrc}
                  alt={`Logo ${index + 1}`}
                  width={258}
                  height={123}
                  layout="intrinsic"
                  className="mx-auto rounded-lg hover:scale-105 transition-transform duration-300 bg-[aliceblue]"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
