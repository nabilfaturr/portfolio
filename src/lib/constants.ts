import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import {
  LucideIcon,
  PenLine,
  User,
  BookOpen,
  Flame,
  LinkedinIcon,
  Mail,
} from "lucide-react";

export const navLinks = [
  {
    label: "Blog",
    href: "/blog",
    icon: PenLine,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: Flame,
  },
  {
    label: "Guestbook",
    href: "/guestbook",
    icon: BookOpen,
  },
  {
    label: "About",
    href: "/about",
    icon: User,
  },
] as const;

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const webStacks = {
  Framework: { name: "Next.js 14", url: "https://nextjs.org/" },
  Language: { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  Styling: { name: "TailwindCSS", url: "https://tailwindcss.com/" },
  UI: { name: "Shadcn/UI", url: "https://ui.shadcn.com/" },
  Deployment: { name: "Vercel", url: "https://vercel.com/" },
  Blog: { name: "MDX", url: "https://mdxjs.com/" },
  Analytics: { name: "Vercel Analytics", url: "https://vercel.com/analytics" },
};

export const social_links = [
  {
    label: "Twitter",
    href: "https://x.com/_nabilfaturr",
    icon: TwitterLogoIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/nabilfaturr",
    icon: GitHubLogoIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nabilfaturr/",
    icon: LinkedinIcon,
  },
  { label: "Email", href: "mailto:devnabilfaturr@gmail.com?subject=Hello", icon: Mail },
];
