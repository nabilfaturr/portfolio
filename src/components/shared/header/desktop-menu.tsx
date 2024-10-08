"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ThemeButton } from "../provider/themes-provider";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

type DesktopMenuProps = {
  className?: string;
  isScrolled: boolean;
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ className, isScrolled }) => {
  const currentPath = usePathname();

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="hidden md:flex items-center gap-4 justify-between">
      <ul className={cn("flex items-center gap-10", className)}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-teal-600",
                isActive(link.href) && "text-teal-600"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Separator orientation="vertical" className={cn("h-8", isScrolled ? "visible" : "invisible")} />
      <ThemeButton />
    </div>
  );
};

export default DesktopMenu;
