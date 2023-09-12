import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeftIcon } from "@heroicons/react/outline";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Lightbox } from "@/components/Elements";
import { Head } from "@/components/Head";
import { DefaultLayout } from "@/components/Layout";
import { projects } from "@/data";
import { ProjectService } from "@/services";
import { IParams, Project } from "@/types";
import { getImageUrl } from "@/utils";

export const getStaticPaths = async () => {
  const paths = projects.map((project) => {
    return {
      params: { slug: project.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { slug } = context.params as IParams;
  const project = ProjectService.get(slug);

  return {
    props: {
      project,
    },
  };
};

type ProjectInformationProps = {
  project: Project;
};

const ProjectInformation: NextPage<ProjectInformationProps> = ({ project }) => {
  const [showingLightbox, setShowingLightbox] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  return (
    <DefaultLayout>
      <Head title={project.title} />

      <main className="mx-auto my-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/projects">
            <a>
              <ChevronLeftIcon className="h-6 w-6 text-gray-500 transition hover:text-black lg:h-8 lg:w-8" />
            </a>
          </Link>

          <h1 className="ml-4 text-3xl lg:text-[2.75rem]">{project.title}</h1>
        </div>
        <div className="mt-12">
          <Lightbox
            images={project.images}
            isOpen={showingLightbox}
            initialSlide={activeImageIndex}
            onClose={() => setShowingLightbox(false)}
          />
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            onSlideChange={(swiper) => {
              setActiveImageIndex(swiper.activeIndex - 1);
            }}
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <figure
                  onClick={() => setShowingLightbox(true)}
                  className="aspect-w-16 aspect-h-9 relative bg-transparent hover:cursor-zoom-in"
                >
                  <img
                    src={getImageUrl(image)}
                    className="h-full w-full object-contain"
                    alt={project.title}
                  />

                  {typeof image == "object" && image?.caption && (
                    <div>
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="relative w-full pt-10 pb-5">
                          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

                          <figcaption className="relative drop-shadow-sm text-center px-4 py-3 text-sm font-light text-white  sm:text-lg md:text-xl lg:text-2xl">
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

        <div className="mt-8 grid grid-cols-6 gap-4">
          {project.what && (
            <div className="col-span-3 lg:col-span-2">
              <h5 className="text-lg uppercase">What</h5>

              <p className="mt-2 font-light">{project.what}</p>
            </div>
          )}

          {project.where && (
            <div className="col-span-3 lg:col-span-2">
              <h5 className="text-lg uppercase">Where</h5>

              <p className="mt-2 font-light">{project.where}</p>
            </div>
          )}

          {project.when && (
            <div className="col-span-3 lg:col-span-2">
              <h5 className="text-lg uppercase">When</h5>

              <p className="mt-2 font-light">{project.when}</p>
            </div>
          )}
        </div>

        {project.description && (
          <p className="mt-8 text-justify font-light display-linebreak">{project.description}</p>
        )}

        {project.other && (
          <div className="mt-8 flex justify-end">
            <small className="font-light">{project.other}</small>
          </div>
        )}
      </main>
    </DefaultLayout>
  );
};

export default ProjectInformation;
