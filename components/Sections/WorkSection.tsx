import Link from "next/link";
import React from "react";

import { Button } from "@/components/Elements/Button";
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
    <div className="aspect-w-1 aspect-h-1 relative" title={project.title}>
      <Link href={`/projects/${project.slug}`}>
        <a className="flex-1 absolute inset-0">
          <FadeInWhenVisible className="h-full w-full">
            <img
              className="w-full h-full object-cover rounded overflow-hidden"
              src={
                typeof project.coverIndex !== "string"
                  ? getImageUrl(project.images[project.coverIndex as number])
                  : project.coverIndex
              }
              alt={project.title}
            />

            <div className="absolute inset-0 text-opacity-0 font-bold text-lg hover:text-opacity-100 text-white bg-black bg-opacity-0 rounded overflow-hidden transition duration-300 hover:bg-opacity-30 grid place-content-center">
              <span className="drop-shadow">{project.title}</span>
            </div>
          </FadeInWhenVisible>
        </a>
      </Link>
    </div>
  );
};

export const WorkSection = ({ projects }: WorkSectionProps) => {
  return (
    <section className="mx-auto max-w-6xl px-7 sm:px-6 lg:px-0">
      <div className="text-center text-4xl py-11 font-medium">Our Work</div>
      <div className="grid grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div className="sm:col-span-1 col-span-3" key={index}>
            <WorkItem
              key={project.id}
              project={project}
              flipped={index % 2 ? true : false}
            />
          </div>
        ))}
      </div>
      <div className="py-11 text-center">
        <Link href="/projects">
          <Button variant="neutral" type="submit">
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
};
