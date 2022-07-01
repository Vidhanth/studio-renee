import { projects, designers } from "@/data";
import { Project } from "@/types";

export const ProjectService = {
  query(limit: number | null) {
    if (!limit) return projects;

    return projects.slice(1).slice(-limit);
  },

  getHomePageProjects(){
    const homePageProjects = [1,2,6];
    return homePageProjects.map((id)=>projects.find((project) => project.id == id)) as Project[];
  },

  get(slug: string) {
    return projects.find((project) => project.slug == slug);
  },
};

export const DesignerService = {
  query() {
    return designers;
  },
};
