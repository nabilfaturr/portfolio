import { getBlogPosts } from "@/lib/post";
import React from "react";
import BlogCard from "./blog-card";

type BlogListProps = {};

const BlogList: React.FC<BlogListProps> = () => {
  const blogPosts = getBlogPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default BlogList;
