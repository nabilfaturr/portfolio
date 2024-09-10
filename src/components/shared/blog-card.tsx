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
      className="border rounded shadow overflow-hidden group"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <article className="px-4 py-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </article>
    </Link>
  );
};

export default BlogCard;
