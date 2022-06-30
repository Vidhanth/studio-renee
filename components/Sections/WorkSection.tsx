import Link from "next/link";
import React from "react";

import { FadeInWhenVisible } from "@/transitions";
import { Project } from "@/types";
import { getImageUrl } from "@/utils";

type WorkSectionProps = {
  projects: Project[];
};

type WorkItemProps = {
  flipped?: boolean;
  project: Project;
};

export const WorkItem = ({ project }: WorkItemProps) => {
  return (
    <div className="aspect-w-1 aspect-h-1 relative">
      <Link href={`/projects/${project.slug}`}>
        <a className="flex-1 absolute inset-0 lg:mx-4">
          <FadeInWhenVisible className="h-full w-full">
            <img
              className="w-full h-full object-cover rounded overflow-hidden"
              src={getImageUrl(project.images[project.coverIndex])}
              alt={project.title}
            />

            <div className="absolute inset-0 bg-white opacity-0 rounded overflow-hidden transition duration-300 hover:opacity-25"></div>
          </FadeInWhenVisible>
        </a>
      </Link>

      {/* <div className="mt-6 flex flex-1 lg:justify-end items-center lg:mx-4 lg:mt-0">
        <div>
          <Link href={`/projects/${project.slug}`}>
            <a className="font-montserrat text-3xl lg:text-4xl">
              {project.title}
            </a>
          </Link>

          <p className="mt-4 text-xl font-light text-gray-600 lg:mt-6 lg:text-base">
            {project.excerpt}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export const WorkSection = ({ projects }: WorkSectionProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center text-3xl py-11">Our Work</div>
      <div className="flex flex-col space-y-10 md:flex-row md:space-x-5 md:space-y-0">
        {projects.map((project, index) => (
          <div className="flex-1">
            <WorkItem
              key={project.id}
              project={project}
              flipped={index % 2 ? true : false}
            />
          </div>
        ))}
      </div>
      <div className="py-14 text-center">
        <Link href="/projects">
          <a className="text-lg  bg-primary p-3 font-light text-gray-600 hover:bg-primaryHover transition duration-200 hover:text-black">
            View All
          </a>
        </Link>
      </div>
    </section>
  );
};
