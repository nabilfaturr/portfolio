export type BlogMetadata = {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  slug: Option;
};

type Option =
  | "welcome-to-my-personal-tech-blog"
  | "understanding-animatable-and-non-animatable-css";

export const blog_metadata_collection: Record<Option, BlogMetadata> = {
  "welcome-to-my-personal-tech-blog": {
    title: "Welcome to My Personal Tech Blog!",
    description:
      "This is my first blog. i will share my learning in web development and my projects.",
    date: "2024-01-11T00:00:00Z",
    thumbnail: "/blog/thumbnail/my-first-blog.webp",
    slug: "welcome-to-my-personal-tech-blog",
  },
  "understanding-animatable-and-non-animatable-css": {
    title: "Understanding Animatable and Non-Animatable CSS Properties",
    description: "Deep dive into animatable and non-animatable CSS properties.",
    date: "2024-02-01T00:00:00Z",
    thumbnail:
      "/blog/thumbnail/undertanding-animatable-and-non-animatable-css.webp",
    slug: "understanding-animatable-and-non-animatable-css",
  },
};
