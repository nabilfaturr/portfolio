import ComingSoon from "@/components/shared/page/coming-soon";
import SectionProvider from "@/components/shared/provider/section-provider";
import React from "react";
import { Metadata } from "next";
import ProjectList from "@/components/shared/project-list";

export const metadata: Metadata = {
  title: "Projects | nabilfaturr",
  description:
    "Nabil Faturrahman's projects page. show my projects and my contributions.",
};

type ProjectPageProps = {};

const ProjectPage: React.FC<ProjectPageProps> = async () => {
  return (
    <SectionProvider>
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-color">
        The list of my projects. Everything was made with ❤️.
      </p>
      <hr className="my-5" />
      <ProjectList />
    </SectionProvider>
  );
};

export default ProjectPage;
