import Image from "next/image";
import Link from "next/link";
import { aboutSections, groupLogos } from "@/data";

export const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:gap-12">
      <div className="flex flex-col items-center text-center justify-between gap-10">
        {aboutSections.map((el, index) => {
          return (
            <div className="flex flex-col gap-4" key={index}>
              <h4 className="text-xl font-semibold">{el.title}</h4>
              <p className="text-md text-justify leading-6 sm:leading-7">
                {el.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <Image
          src="/logo.png"
          alt="Company Logo"
          className="bg-[aliceblue] p-5 rounded-lg w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] md:p-7"
          layout="intrinsic"
          width={300}
          height={300}
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
