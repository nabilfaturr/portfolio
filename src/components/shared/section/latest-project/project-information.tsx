import React from "react";
import { latest_project_tech_stack } from "./constant";
import { TooltipIcon } from "../../tooltip";

const ProjectInformation = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-5">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className=" text-muted-foreground">{description}</p>
      <div className="flex items-center gap-4">
        {latest_project_tech_stack.map((tech) => {
          const Icon = tech.icon;
          return (
            <TooltipIcon
              key={tech.name}
              icon={
                <Icon size={24} className="dark:text-white/90 text-black/90" />
              }
              name={tech.name}
              size={20}
              link={tech.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInformation;
