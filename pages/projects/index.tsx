import { Head } from "@/components/Head";
import { DefaultLayout } from "@/components/Layout";
import { projects } from "@/data";
import { FadeInWhenVisible } from "@/transitions";
import { Project } from "@/types";
import { getImageUrl } from "@/utils";
import { NextPage } from "next";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};

type ProjectsProps = {
  projects: Project[];
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <DefaultLayout>
      <Head title="Projects" />
      <div className="grid px-7 lg:px-5 grid-cols-2 lg:grid-cols-3 gap-5 my-7 md:my-12 mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="col-span-2 md:col-span-1">
            <ProjectItem project={project} key={project.id} />
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <div className="mb-12 text-lg bg-primary p-3">More Coming Soon!</div>
      </div>
    </DefaultLayout>
  );
};

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <a>
        <FadeInWhenVisible>
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="h-full w-full object-cover rounded"
              src={
                typeof project.coverIndex != "string"
                  ? getImageUrl(project.images[project.coverIndex])
                  : project.coverIndex
              }
              alt={project.title}
            />
            <div className="absolute inset-0 bg-white opacity-0 rounded overflow-hidden transition duration-300 hover:opacity-25"></div>
          </div>
          <div className=" text-xl text-center mt-3">{project.title}</div>
        </FadeInWhenVisible>
      </a>
    </Link>
  );
};

export default Projects;
