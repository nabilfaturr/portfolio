import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { BlogMetadata } from "@/lib/blog-metadata";
import Image from "next/image";
import Share from "./share";

type CoverProps = PropsWithChildren &
  BlogMetadata & {
    className?: string;
  };

const Cover: React.FC<CoverProps> = ({
  children,
  className,
  title,
  description,
  date,
  thumbnail,
  slug,
}) => {
  console.log(thumbnail);

  return (
    <div
      className={cn(
        "aspect-video rounded-xl overflow-hidden border group relative",
        className
      )}
    >
      <div className="relative size-full">
        <Image
          src={thumbnail}
          alt={title}
          style={{ objectPosition: "top" }}
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1 className="text-xl md:text-2xl font-bold text-white">{title}</h1>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
      <Share />
    </div>
  );
};

export default Cover;