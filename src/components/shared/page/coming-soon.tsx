import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ComingSoon = ({ page }: { page: string }) => {
  return (
    <div className="flex items-center justify-center h-screen absolute top-0 left-0 w-full">
      <div className="flex flex-col items-center justify-center space-y-3 px-2">
        <div className="text-center">
          <h1 className="inline-flex flex-col sm:flex-row gap-2 text-4xl md:text-5xl font-bold">
            <span>{page} is</span>{" "}
            <span className="bg-brand-gradient">Coming Soon</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            This page is under construction, im working on it.
          </p>
        </div>
        <Button
          asChild
          className="bg-teal-600 hover:bg-teal-700 transition-all duration-300"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
