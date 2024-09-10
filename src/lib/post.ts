// import fs from "fs/promises";
// import path from "path";
// import matter from "gray-matter";
// import { readdirSync, readFileSync } from "fs";

// export type BlogPosts = {
//   content: string;
//   data: {
//     title: string;
//     description: string;
//     date: string;
//   };
//   slug: string;
// };

// // will return our any MDX Files specific on the dirToRead dir
// export const getMDXFiles = (dirToRead: string) => {
//   return readdirSync(path.join(process.cwd(), dirToRead));
// };

// // will read the MDX file and return the content and the metadata
// export const readMDXFile = (dirToRead: string, filePath: string) => {
//   const rawMDXContent = readFileSync(
//     path.join(process.cwd(), dirToRead, filePath),
//     "utf8"
//   );
//   return matter(rawMDXContent);
// };

// // will return slug, content of the blog, and the metadata
// export const getMDXData = (dirToRead: string) => {
//   const MDXFiles = getMDXFiles(dirToRead);
//   return MDXFiles.map((file) => {
//     const { data } = readMDXFile(dirToRead, file);
//     let slug = path.basename(file, path.extname(file));
//     return { data, slug };
//   });
// };

// export const getBlogPost = () => {
//   const pathToBlogContent = `/content/blog`;
//   return getMDXData(pathToBlogContent);
// };

// export const getProjectPost = () => {
//   const pathToBlogContent = `/content/project`;
//   return getMDXData(pathToBlogContent);
// };

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostMetadata = {
  title: string;
  description: string;
  date: string;
};

const blogPostDir = path.join(process.cwd(), "src/content/blog");
const projectPostDir = path.join(process.cwd(), "src/content/project");

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(blogPostDir, `${slug}.mdx`);
  console.log({ fullPath });
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  const metadata = data as BlogPostMetadata;
  const { title, description, date } = metadata;

  return {
    slug,
    title,
    description,
    date,
  };
}

export const getBlogPosts = () => {
  const blogPosts = fs.readdirSync(blogPostDir);

  return blogPosts.map((post) => {
    const filePath = path.join(blogPostDir, post);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: path.basename(post, ".mdx"),
      title: data.title,
      description: data.description,
      date: data.date,
      thumbnail: data.thumbnail,
    };
  });
};
