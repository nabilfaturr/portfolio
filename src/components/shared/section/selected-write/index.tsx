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
      <SelectedWriteContent className="p-6 border rounded-b-md drop-shadow-xl bg-black/5 dark:bg-white/5 lg:grid-cols-2">
        {latest_write_blog_metadata.map((blog) => (
          <BlogCard
            key={blog.slug}
            {...blog}
            contentClassName="bg-white text-black dark:bg-black dark:text-white"
          />
        ))}
      </SelectedWriteContent>
    </SectionProvider>
  );
};

export default LatestWrite;
