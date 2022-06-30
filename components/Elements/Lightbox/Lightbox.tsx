import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { XIcon } from "@heroicons/react/outline";
import NextImage from "next/image";
import * as React from "react";
import { Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Dialog } from "@/components/Elements";
import { Image } from "@/types";
import { getImageUrl } from "@/utils";

export type LightboxProps = {
  isOpen?: boolean;
  onClose: () => void;
  images?: string[] | Image[];
  initialSlide?: number;
};

export const Lightbox = ({
  isOpen = false,
  onClose,
  images,
  initialSlide,
}: LightboxProps) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="fixed inset-0 inline-block h-full w-full bg-white">
        <button
          onClick={onClose}
          className="x-rounded-lg fixed right-2 top-2 z-10"
        >
          <XIcon className="h-9 w-9 text-white drop-shadow-strong" />
        </button>

        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          autoplay={false}
          pagination={{
            clickable: true,
          }}
          keyboard={true}
          modules={[Navigation, Keyboard]}
          initialSlide={initialSlide}
          className="lightbox"
        >
          {images &&
            images.map((image, index) => (
              <SwiperSlide key={index}>
                <figure className="relative h-screen w-screen">
                  <NextImage
                  layout="fill"
                    src={getImageUrl(image)}
                    className="h-full w-full object-contain"
                    alt=""
                  />

                  {typeof image == "object" && image?.caption && (
                    <div>
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="relative w-full pt-12">
                          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

                          <figcaption className="relative px-4 py-3 text-center font-montserrat text-3xl font-light text-gray-100">
                            {image.caption}
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0"></div>
                </figure>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Dialog>
  );
};
