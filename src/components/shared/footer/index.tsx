import { navLinks } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import Socials from "../socials";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-lg py-20 mx-auto border rounded-t-lg border-black/10 dark:border-white/10 backdrop-blur-sm flex flex-row justify-evenly">
        <Navigation />
        <Socials />
      </div>
    </footer>
  );
};

const Navigation = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-lg font-medium">Navigation</h2>
      <div className="flex flex-col gap-6">
        {navLinks.map((link) => (
          <NavigationItem
            key={link.label}
            label={link.label}
            href={link.href}
          />
        ))}
      </div>
    </div>
  );
};

const NavigationItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link href={href} className="pr-2">
      {label}
    </Link>
  );
};

export default Footer;
