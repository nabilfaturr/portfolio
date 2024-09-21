"use client";
import React from "react";
import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

type TooltipIconProps = {
  icon: React.ReactNode;
  name: string;
  size: number;
  link: string;
};

export const TooltipIcon: React.FC<TooltipIconProps> = ({ icon, name, size, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider delayDuration={10}>
      <Tooltip>
        <TooltipTrigger 
          className={`size-${size} transition-transform duration-300 ${isHovered && 'transform -translate-y-1'}`} 
          asChild
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link href={link as string} target="_blank">
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};