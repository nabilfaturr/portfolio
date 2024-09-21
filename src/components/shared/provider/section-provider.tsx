import { cn } from "@/lib/utils";
import React from "react";

type SectionProviderProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

const SectionProvider: React.FC<SectionProviderProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section id={id} className={cn(`min-h-screen mt-header`, className)}>
      {children}
    </section>
  );
};

export default SectionProvider;
