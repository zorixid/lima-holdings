import { AboutUs } from "@/components/about-us";
import Slider from "@/components/slider";
import { slidesData } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen space-y-24 mb-20">
      <div className="flex flex-col w-full h-[350px] sm:h-[450px] md:h-[578px]">
        <Slider
          direction={"horizontal"}
          navigation={true}
          slidesData={slidesData}
        />
      </div>
      <div className="max-w-[1350px] w-full mx-auto px-7 sm:px-10 md:px-20">
        <AboutUs />
      </div>
    </main>
  );
}
