import { AboutUs } from "@/components/about-us";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10 mb-16">
      <div className="flex flex-col w-full h-[350px] sm:h-[450px] md:h-[578px]">
        <Slider />
      </div>
      <div className="flex flex-col items-center justify-start max-w-[1150px] px-7 sm:px-10 md:px-20 gap-16">
        <AboutUs />
      </div>
    </main>
  );
}
