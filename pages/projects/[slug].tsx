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
      <Head
        title={project.title}
        description="Best quality architecture and interior design services. Complete design solution for your space, not just wood work! Think design, think TranquilSpaces"
      />

      <main className="mx-auto my-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/projects">
            <a>
              <ChevronLeftIcon className="h-6 w-6 text-gray-500 transition hover:text-black lg:h-8 lg:w-8" />
            </a>
          </Link>

          <h1 className="ml-4 font-montserrat text-3xl lg:text-[2.75rem]">
            {project.title}
          </h1>
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
                  className="aspect-w-16 aspect-h-9 relative bg-secondary hover:cursor-zoom-in"
                >
                  <img
                    src={getImageUrl(image)}
                    className="h-full w-full object-contain"
                    alt={project.title}
                  />

                  {typeof image == "object" && image?.caption && (
                    <div>
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="relative w-full pt-12">
                          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>

                          <figcaption className="relative px-4 py-3 font-montserrat text-lg font-light text-gray-100 sm:text-xl md:text-2xl lg:text-3xl">
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
          <p className="mt-8 text-justify font-light">{project.description}</p>
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
