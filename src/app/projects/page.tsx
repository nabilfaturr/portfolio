import ComingSoon from "@/components/shared/page/coming-soon";
import SectionProvider from "@/components/shared/provider/section-provider";
import React from "react";

type ProjectPageProps = {};

const ProjectPage: React.FC<ProjectPageProps> = async () => {
  return (
    <SectionProvider>
      <ComingSoon page="Projects" />
    </SectionProvider>
  );
};

export default ProjectPage;
