import { formatDate } from "@/lib/post";
import { ArrowRight, Calendar, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  slug: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  thumbnail,
  slug,
}) => {
  return (
    <Link
      key={slug}
      href={`/blog/${slug}`}
      className="flex flex-col border rounded-md overflow-hidden group shadow-sm"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 transform-gpu"
        />
      </div>
      <article className="px-4 py-4 flex flex-col gap-2 h-48">
        <p className="text-muted-foreground flex justify-between text-[10px] xs:text-[12px] xsm:text-sm">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(date)}
          </span>
          <span className="flex items-center gap-2">
            <BlogTotalViews />
            <BlogReadTime />
          </span>
        </p>
        <h2 className="text-2xl font-bold">{title}</h2>
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
