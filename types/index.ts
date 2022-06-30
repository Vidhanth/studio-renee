import { ParsedUrlQuery } from "querystring";

export interface IParams extends ParsedUrlQuery {
  slug: string;
}

export type Image = {
  path: string;
  caption?: string;
};

export type Project = {
  id: string | number;
  title: string;
  slug: string;
  images: string[] | Image[];
  excerpt: string;
  description?: string;
  what?: string;
  where?: string;
  when?: string;
  other?: string;
  coverIndex: number;
};

export type Designer = {
  id: string | number;
  name: string;
  photo: string;
  role: string;
  about: string;
};
