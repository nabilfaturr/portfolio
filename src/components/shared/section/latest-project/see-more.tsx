import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const SeeMore = ({
  slug,
  variant,
}: {
  slug: string;
  variant: "mobile" | "desktop";
}) => {
  const mobile =
    "flex items-center gap-2 justify-center text-teal-600 hover:underline underline-offset-4 transition-all";
  const desktop =
    "hidden md:flex items-center gap-2 justify-self-end text-teal-600";

  const style = variant === "mobile" ? mobile : desktop;

  return (
    <Link href={`/projects/${slug}`} className={cn(style)}>
      <span>See More</span>
    </Link>
  );
};

export default SeeMore;
