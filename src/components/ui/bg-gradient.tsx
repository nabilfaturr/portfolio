import React from "react";
import bgGradient from "@/../public/Gradient-2.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

const dark_gradient =
  "dark:bg-gradient-to-tl dark:from-cyan-500 dark:via-emerald-700 dark:to-sky-400 ";

const light_gradient =
  "bg-gradient-to-tl from-cyan-500 via-emerald-700 to-sky-500";

const BgGradient = () => {
  return (
    <div className="absolute z-[-1] w-[calc(100vw-20px)] top-[-180px] dark:top-[-240px] h-[180px] mx-auto">
      <div
        className={cn(
          "max-w-6xl dark:max-w-3xl mx-auto w-full h-full blur-[140px] dark:blur-[160px]",
          light_gradient,
          dark_gradient
        )}
      ></div>
    </div>
  );
};

export default BgGradient;
