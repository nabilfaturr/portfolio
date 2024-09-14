"use client";

import { social_links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const FindMe = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Find Me</h2>
      <p className="text-color">Here are some of the ways to find me:</p>
      <Socials />
    </div>
  );
};

const Socials = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {social_links.map((social) => (
        <SocialItem
          key={social.href}
          href={social.href}
          label={social.label}
          icon={social.icon}
        />
      ))}
    </ul>
  );
};

export const SocialItem = ({
  label,
  href,
  icon: Icon,
}: {
  label: string;
  href: string;
  icon: React.ElementType;
}) => {
  const colorClasses = {
    GitHub: "bg-black text-white border",
    Twitter: "bg-blue-500 text-white ",
    LinkedIn: "bg-blue-700 text-white ",
    Email: "bg-white text-black border",
  };

  return (
    <li key={href} className="hover:scale-105 transition-all duration-300">
      <Link
        href={href}
        className={cn(
          "flex items-center justify-center gap-3 rounded-lg px-8 font-medium py-6 size-full md:px-10 md:py-10 hover:bg-opacity-90 transition-all duration-300",
          colorClasses[label as keyof typeof colorClasses]
        )}
      >
        {label}
        <Icon className="w-5 h-5" />
      </Link>
    </li>
  );
};

export default FindMe;
