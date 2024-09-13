import React from "react";
import { Metadata } from "next";
import { CircleAlert } from "lucide-react";
import BlogList from "@/components/shared/blog-list";
import SectionProvider from "@/components/shared/provider/section-provider";

export const metadata: Metadata = {
  title: "Blog | nabilfaturr",
  description:
    "Nabil Faturrahman's blog page. here, I will be sharing my thoughts and experiences. hope you enjoy it!",
};

const BlogPage = () => {
  return (
    <SectionProvider className="min-h-screen">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="flex flex-col gap-2">
          <span>
            This is a blog page. Here, I will be sharing my thoughts especially
            about web development and design.
          </span>
          <span className="flex items-center gap-3 text-muted-foreground bg-yellow-100 text-yellow-700 border border-yellow-300 px-4 py-2 rounded-md w-fit text-sm">
            <CircleAlert className="w-6 h-6" /> Views and read time are
            considered as a dummy placeholder. I&apos;m still working on it!
          </span>
        </p>
      </div>
      <hr className="my-5" />
      <BlogList />
    </SectionProvider>
  );
};

export default BlogPage;
