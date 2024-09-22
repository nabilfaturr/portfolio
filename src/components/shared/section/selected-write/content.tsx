import { cn } from "@/lib/utils";
import React from "react";

const SelectedWriteContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid md:grid-cols-2 gap-6", className)}>
      {children}
    </div>
  );
};

export default SelectedWriteContent;
