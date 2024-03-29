// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects, mainCarouselImages } from "@/data";
import { getImageUrl } from "@/utils";
import { ProjectService } from "@/services";

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
      {mainCarouselImages.map((img, index) => (
        <SwiperSlide key={index}>
          {img.project ? (
            <img
              src={getImageUrl(
                projects[img.project - 1].images[img.image - 1]!!
              )}
              alt={projects[0].title}
              className="md:h-screen w-full object-cover"
            />
          ) : (
            <img
              src={img.image.toString()}
              alt={projects[0].title}
              className="md:h-screen w-full object-cover"
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
