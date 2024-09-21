import React from "react";
import SectionProvider from "../../provider/section-provider";
import ProjectInformation from "./project-information";
import ProjectImage from "./project-image";
import { latest_project_metadata } from "@/lib/project-metadata";
import LatestProjectHeader from "./header";
import SeeMore from "./see-more";
import LatestProjectContent from "./project-content";

const LatestProjectSection = () => {
  const { title, long_description, thumbnail, slug } = latest_project_metadata;
  return (
    <SectionProvider id="latest-project">
      <div>
        <LatestProjectHeader />
        <LatestProjectContent className="p-5 border rounded-b-md">
          <ProjectInformation
            title={title}
            description={long_description}
            slug={slug}
          />
          <ProjectImage title={title} thumbnail={thumbnail} />
          <SeeMore variant="mobile" slug={slug} />
        </LatestProjectContent>
      </div>
    </SectionProvider>
  );
};

export default LatestProjectSection;
