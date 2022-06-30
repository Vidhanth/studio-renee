import { CheckCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";

import { FadeInWhenVisible } from "@/transitions";

export const HeroSection = () => {
  return (
    <section className="bg-primary lg:flex">
      <div className="lg:w-5/12">
        <div className="py-8 px-4 sm:px-8 md:py-16 lg:pb-24">
          <div className="mx-auto flex flex-col items-center text-center font-montserrat text-white ">
            <FadeInWhenVisible delay={1}>
              <h1 className="mt-4 text-3xl lg:mt-10 lg:text-[2.75rem]">
                TranquilSpaces
              </h1>

              <h3 className="mt-4 font-semibold">
                architecture + interiors at its best
              </h3>

              <p className="text-light mt-8 text-lg lg:max-w-sm lg:text-base">
                We are a team of architects and designers who believe in
                creating designs that bring in a sense of calmness and peace.
                <span className="mt-6 block">
                  Think design, think TranquilSpaces!
                </span>
              </p>
            </FadeInWhenVisible>
          </div>
        </div>

        <FadeInWhenVisible
          delay={1.25}
          className="bg-secondary py-8 px-4 sm:px-8 md:py-16"
        >
          <div className="mx-auto flex flex-col items-center font-montserrat text-white">
            <ul className="space-y-1 text-lg text-primary lg:text-base">
              <FadeInWhenVisible delay={1.5}>
                <li>
                  <a
                    href="#interior-design"
                    className="inline-flex items-center"
                  >
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />

                    <span className="ml-2">
                      Interior Design / Renovation Solutions -{" "}
                      <span className="font-bold">2,999/-</span>
                    </span>
                  </a>
                </li>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={1.75}>
                <li>
                  <a
                    href="#architecture-solutions"
                    className="inline-flex items-center"
                  >
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />

                    <span className="ml-2">
                      Architecture Solutions -{" "}
                      <span className="font-bold">14,999/-</span>
                    </span>
                  </a>
                </li>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={2}>
                <li>
                  <a
                    href="#premium-interiors"
                    className="inline-flex items-center"
                  >
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />

                    <span className="ml-2">
                      Premium Home Interiors -{" "}
                      <span className="font-bold">7,49,000/-*</span>
                    </span>
                  </a>
                </li>
              </FadeInWhenVisible>
            </ul>
          </div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible className="relative flex-1">
        <div className="lg:absolute lg:inset-0">
          <img
            src="/img/hero-background.jpg"
            alt=""
            className="object-cover lg:h-full lg:w-full"
          />
        </div>

        <div className="absolute inset-0"></div>
      </FadeInWhenVisible>
    </section>
  );
};
