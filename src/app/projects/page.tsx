import ComingSoon from "@/components/shared/page/coming-soon";
import SectionProvider from "@/components/shared/provider/section-provider";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | nabilfaturr",
  description:
    "Nabil Faturrahman's projects page. show my projects and my contributions.",
};

type ProjectPageProps = {};

const ProjectPage: React.FC<ProjectPageProps> = async () => {
  return (
    <SectionProvider>
      <ComingSoon page="Projects" />
    </SectionProvider>
  );
};

export default ProjectPage;
