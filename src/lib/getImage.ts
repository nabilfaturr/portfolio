import fs from "fs/promises";
import path from "path";
import { getPlaiceholder } from "plaiceholder";
export const getLocalImage = async (src: string) => {
  const imagePath = path.join(process.cwd(), "public", src);
  const imageBuffer = await fs.readFile(imagePath);

  const {
    metadata: { width, height },
    color,
    ...plaiceholder
  } = await getPlaiceholder(imageBuffer, {
    size: 32,
  });

  return {
    img: { src, width, height },
    ...plaiceholder,
  };
};
