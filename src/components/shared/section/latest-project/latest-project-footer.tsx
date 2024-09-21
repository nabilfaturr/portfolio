import React from "react";
import SeeMore from "./see-more";

const LatestProjectFooter = ({ slug }: { slug: string }) => {
  return (
    <div className="flex flex-col items-center justify-between border-b border-x rounded-b-md px-4 py-3">
      <SeeMore variant="mobile" slug={slug} />
    </div>
  );
};

export default LatestProjectFooter;
