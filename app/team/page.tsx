import Slider from "@/components/slider";
import { Team } from "@/components/team";
import { slidesData } from "@/data";

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-10 mb-16">
      <div className="w-full h-[350px] sm:h-[578px]">
        <Slider
          slidesData={slidesData}
          direction={"horizontal"}
          navigation={true}
        />
      </div>
      <div className="max-w-[1350px] px-7 sm:px-20">
        <Team />
      </div>
    </div>
  );
}
