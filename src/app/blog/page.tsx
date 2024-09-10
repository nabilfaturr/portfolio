import BlogList from "@/components/shared/blog-posts";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | nabilfaturr",
  description:
    "This is a blog page. Here, I will be sharing my thoughts and experiences.",
};

const BlogPage = () => {
  return (
    <div className="min-h-screen pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="flex flex-col">
          <span>
            This is a blog page. Here, I will be sharing my thoughts and
            experiences.
          </span>
          <span>This blog is created with Next.js and MDX</span>
        </p>
      </div>
      <hr className="my-5" />
      <BlogList />
    </div>
  );
};

export default BlogPage;
