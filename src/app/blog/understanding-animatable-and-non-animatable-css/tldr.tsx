import { Heading, Text } from "@/components/shared/mdx/typography";
import { cn } from "@/lib/utils";
import React from "react";

const TLDR = () => {
  const style =
    "flex flex-col gap-2 p-6 rounded-lg border-4 border-double border-black/10 dark:border-white/10 bg-teal-50 dark:bg-teal-900/20 border-teal-500 dark:border-teal-400 mt-12";
  return (
    <div className={cn(style, "bg-gradient-to-l dark:bg-gradient-to-r dark:from-teal-900 from-teal-500/10 via-teal-500/20 to-teal-500/10")}>
      <Heading level={2} className="p-0 m-0">
        TL;DR
      </Heading>
      <Text className="p-0 m-0">
        Never rely on `display`, `position`, `float`, `clear`, `overflow`, and
        `z-index` for creating animations.
      </Text>
    </div>
  );
};

export default TLDR;
