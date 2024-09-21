import { cn } from "@/lib/utils";
import React from "react";

const LatestProjectContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
};

export default LatestProjectContent;
