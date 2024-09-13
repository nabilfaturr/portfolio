import { cn } from "@/lib/utils";
import React from "react";

type PostProviderProps = {
  children: React.ReactNode;
  className?: string;
};

const PostProvider = ({ children, className }: PostProviderProps) => {
  return (
    <section className={cn(`min-h-screen space-y-6 mt-20`, className)}>
      {children}
    </section>
  );
};

export default PostProvider;
