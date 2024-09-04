"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { ThemeButton } from "../themes-provider";
import { Separator } from "@/components/ui/separator";

type DesktopMenuProps = {
  className?: string;
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ className }) => {
  const pathname = usePathname();
  const router = useRouter();

  const currentPath = (path: string) => {
    return pathname === path;
  };

  console.log(pathname);
  console.log(router);

  return (
    <div className="hidden md:flex items-center gap-4 justify-between">
      <ul className={cn("flex items-center gap-10", className)}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Separator orientation="vertical" className="h-8"/>
      <ThemeButton />
    </div>
  );
};

export default DesktopMenu;
