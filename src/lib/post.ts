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

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
