// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "@/data";
import { getImageUrl } from "@/utils";

export const CarouselSection = () => {
  return (
    <Swiper
      spaceBetween={50}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {projects[0].images.map((img, index) => (
        <SwiperSlide>
          <img
            src={getImageUrl(img)}
            alt={projects[0].title}
            className="md:h-screen w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
