import { projects, designers } from "@/data";

export const ProjectService = {
  query(limit: number | null) {
    if (!limit) return projects;

    return projects.slice(0, limit);
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
