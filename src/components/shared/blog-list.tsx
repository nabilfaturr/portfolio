import React from "react";
import BlogCard from "./blog-card";
import { blog_metadata_collection } from "@/lib/blog-metadata";

type BlogListProps = {};

const BlogList: React.FC<BlogListProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.values(blog_metadata_collection).map((post) => {
        return <BlogCard key={post.slug} {...post} />;
      })}
    </div>
  );
};

export default BlogList;
