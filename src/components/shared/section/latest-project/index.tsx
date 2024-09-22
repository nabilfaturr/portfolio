import React from "react";
import SectionProvider from "../../provider/section-provider";
import ProjectInformation from "./project-information";
import ProjectImage from "./project-image";
import { latest_project_metadata } from "@/lib/project-metadata";
import LatestProjectHeader from "./header";
import LatestProjectContent from "./project-content";
import LatestProjectFooter from "./latest-project-footer";

const LatestProjectSection = () => {
  const { title, long_description, thumbnail, slug, github_url, live_url } =
    latest_project_metadata;
  return (
    <SectionProvider id="latest-project" className="min-h-fit">
      <div>
        <LatestProjectHeader />
        <LatestProjectContent className="p-5 border">
          <ProjectInformation title={title} description={long_description} />
          <ProjectImage title={title} thumbnail={thumbnail} />
        </LatestProjectContent>
        <LatestProjectFooter
          slug={slug}
          github_url={github_url}
          live_url={live_url}
        />
      </div>
    </SectionProvider>
  );
};

export default LatestProjectSection;
