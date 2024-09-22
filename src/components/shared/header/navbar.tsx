"use client";

import Link from "next/link";
import React from "react";
import { ThemeButton } from "../provider/themes-provider";
import MobileMenu from "@/components/shared/header/dropdown-menu";
import DesktopMenu from "./desktop-menu";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`backdrop-blur-3xl bg-black/5 dark:bg-black/30 flex items-center px-4 md:px-6 rounded-lg h-[3.5rem] transition-colors duration-200 ${
        isScrolled
          ? "border-black/10 dark:border-white/10"
          : "border-transparent"
      }`}
    >
      <div className="flex items-center w-full justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-medium text-[hsl(var(--brand-color))] ">
            nabilfaturr
          </span>
        </Link>

        <DesktopMenu />

        <div className="md:hidden flex items-center gap-2">
          <ThemeButton />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
