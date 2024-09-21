import Link from "next/link";
import React from "react";

const LatestProjectHeader = () => {
  return (
    <div className="flex items-center justify-between border-t border-x rounded-t-md px-4 py-3">
      <Link href="#latest-project">
        <h2 className="text-lg font-medium text-teal-600 border-b border-dotted border-teal-600 hover:border-solid transition-all duration-300">
          Latest Project
        </h2>
      </Link>
      <Link
        href="/projects"
        className="font-medium text-teal-600 hover:border-b hover:border-teal-600 transition-all duration-300"
      >
        View All
      </Link>
    </div>
  );
};

export default LatestProjectHeader;
