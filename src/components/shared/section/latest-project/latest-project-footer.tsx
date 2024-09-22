import React from "react";
import SeeMore from "./see-more";
import LatestProjectLive from "./latest-project-live";
const LatestProjectFooter = ({ slug, github_url, live_url }: { slug: string, github_url: string, live_url: string }) => {
  return (
    <div className="flex items-center justify-between border-b border-x rounded-b-md px-4 py-3">
      <SeeMore variant="mobile" slug={slug} />
      <LatestProjectLive github_url={github_url} live_url={live_url} />
    </div>
  );
};

export default LatestProjectFooter;
