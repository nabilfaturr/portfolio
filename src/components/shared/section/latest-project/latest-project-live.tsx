import React from "react";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const LatestProjectLive = ({
  github_url,
  live_url,
}: {
  github_url: string;
  live_url: string;
}) => {
  return (
    <div className="flex">
      <Github github_url={github_url} />
      <Live live_url={live_url} />
    </div>
  );
};

const Github = ({ github_url }: { github_url: string }) => {
  return (
    <Link
      href={github_url}
      className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white px-4 py-2 rounded-tl-md rounded-bl-md w-[6.5rem] text-center flex items-center gap-2 text-sm"
    >
      <GithubIcon className="size-4" />
      <span>Github</span>
    </Link>
  );
};

const Live = ({ live_url }: { live_url: string }) => {
  return (
    <Link
      href={live_url}
      className="bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white px-4 py-2 rounded-tr-md rounded-br-md w-24 text-center flex items-center gap-2 text-sm"
    >
      <ExternalLinkIcon className="size-4" />
      <span>Live</span>
    </Link>
  );
};

export default LatestProjectLive;
