import Link from "next/link";
import React from "react";
import { Github, Play } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heading } from "./mdx/typography";
const Live = ({
  github_url,
  live_url,
}: {
  github_url: string;
  live_url: string;
}) => {
  return (
    <div className="space-y-4 pb-2">
      <h2 className="text-3xl font-bold mb-2 mt-4">Try it out</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href={github_url}
          target="_blank"
          className="h-32 bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 text-white p-4 rounded-lg flex flex-col items-center justify-center hover:scale-[1.02] transition-all duration-300"
        >
          <span className="font-bold text-xl">Noteworthy</span>
          <span className="text-sm flex items-center gap-1">
            on <GitHubLogoIcon /> github.com
          </span>
        </Link>
        <Link
          href={live_url}
          target="_blank"
          className="bg-gradient-to-tr from-teal-700 via-teal-800 to-teal-950 text-white p-4 rounded-lg h-32 flex flex-col items-center justify-center hover:scale-[1.02] transition-all duration-300"
        >
          <span className="text-xl font-bold">Live on production</span>
          <span className="text-sm flex items-center gap-1">
            on <span className="font-bold">noteworthy.vercel.app</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Live;
