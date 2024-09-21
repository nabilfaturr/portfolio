import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
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
    "flex items-center gap-2 justify-self-end mt-4 text-teal-600 hover:border-b hover:border-teal-600 transition-all duration-300 md:hidden";
  const desktop =
    "hidden md:flex items-center gap-2 justify-self-end mt-4 text-teal-600";

  const style = variant === "mobile" ? mobile : desktop;

  return (
    <Link href={`/projects/${slug}`} className={cn(style)}>
      <span>See More</span>
      <ArrowRightIcon className="w-4 h-4" />
    </Link>
  );
};

export default SeeMore;
