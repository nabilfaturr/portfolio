import React from "react";
import SectionProvider from "../../provider/section-provider";
import { latest_write_blog_metadata } from "./constant";
import BlogCard from "../../blog-card";
import SelectedWriteHeader from "./header";
import SelectedWriteContent from "./content";

const LatestWrite = () => {
  return (
    <SectionProvider className="min-h-fit" id="selected-write">
      <SelectedWriteHeader />
      <SelectedWriteContent className="p-5 border rounded-b-md drop-shadow-xl">
        {latest_write_blog_metadata.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </SelectedWriteContent>
    </SectionProvider>
  );
};

export default LatestWrite;
