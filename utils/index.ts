import { Image } from "../types";

export const getImageUrl = (image: string | Image) => {
  return typeof image == "string" ? image : image.path;
};
