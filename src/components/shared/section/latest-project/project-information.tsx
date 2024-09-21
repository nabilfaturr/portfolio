import Link from "next/link";
import React from "react";
import { latest_project_tech_stack } from "./constant";
import { TooltipIcon } from "../../tooltip";
import SeeMore from "./see-more";

const ProjectInformation = ({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-5">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-color">{description}</p>
      <div className="flex items-center gap-3">
        {latest_project_tech_stack.map((tech) => {
          const Icon = tech.icon;
          return (
            <TooltipIcon
              key={tech.name}
              icon={<Icon size={28} />}
              name={tech.name}
              size={20}
              link={tech.link}
            />
          );
        })}
      </div>
      <SeeMore variant="desktop" slug={slug} />
    </div>
  );
};

export default ProjectInformation;
