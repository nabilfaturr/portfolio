import { formatDate } from "@/lib/post";
import { ArrowRight, Calendar, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StaticImage } from "./static-image";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  slug: string;
  contentClassName?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  thumbnail,
  slug,
  contentClassName,
}) => {
  return (
    <Link
      key={slug}
      href={`/blog/${slug}`}
      className="flex flex-col border rounded-md overflow-hidden group shadow-sm"
    >
      <StaticImage
        src={thumbnail}
        containerClass="aspect-video overflow-hidden"
        alt={title}
      />
      <article
        className={cn(`px-4 py-4 flex flex-col gap-2 h-48`, contentClassName)}
      >
        <p className="text-muted-foreground flex justify-between text-[10px] xs:text-[12px] xsm:text-sm">
          <span>{formatDate(date)}</span>
          <span className="flex items-center gap-2">
            <BlogTotalViews />
            <BlogReadTime />
          </span>
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

const BlogTotalViews = () => {
  return (
    <span className="flex items-center gap-1 w-max">
      <Eye size={12} />
      12000 views
    </span>
  );
};

const BlogReadTime = () => {
  return (
    <span className=" flex items-center gap-1">
      <Clock size={12} />
      12 min read
    </span>
  );
};

export default BlogCard;
