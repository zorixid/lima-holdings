import { ContactUs } from "@/components/contact-us";
import Slider from "@/components/slider";
import { slidesData } from "@/data";

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-10 mb-16">
      <div className="flex flex-col w-full h-[350px] sm:h-[578px]">
        <Slider
          slidesData={slidesData}
          direction={"horizontal"}
          navigation={true}
        />
      </div>
      <div className="flex flex-col items-center justify-start text-left max-w-[1150px] px-7 sm:px-10 md:px-20 gap-16">
        <ContactUs />
      </div>
    </div>
  );
}
