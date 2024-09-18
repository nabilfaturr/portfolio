import { formatDate } from "@/lib/post";
import { ProjectMetadata } from "@/lib/project-metadata";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StaticImage from "./static-image";

const ProjectCard: React.FC<ProjectMetadata> = ({
  title,
  description,
  date,
  thumbnail,
  slug,
}) => {
  return (
    <Link
      key={slug}
      href={`/projects/${slug}`}
      className="flex flex-col border rounded-md overflow-hidden group shadow-sm p-3 transition-transform duration-300 hover:scale-[1.02]"
    >
      <StaticImage
        containerClass="relative aspect-video overflow-hidden border rounded-md"
        src={thumbnail}
        alt={title}
      />
      <article className="p-2 flex flex-col gap-2 h-48">
        <p className="text-muted-foreground flex justify-between text-[10px] xs:text-[12px] xsm:text-sm">
          <span>{formatDate(date)}</span>
        </p>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm line-clamp-2 text-color">{description}</p>
        <p className="text-sm mt-auto text-muted-foreground flex items-center gap-1 group-hover:gap-2 transition-all duration-300 ease-in-out group-hover:text-teal-600">
          Read more <ArrowRight size={14} />
        </p>
      </article>
    </Link>
  );
};

export default ProjectCard;
