"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

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
    <ul className={cn("hidden md:flex items-center gap-10", className)}>
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
