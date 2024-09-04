import { LucideIcon, PenLine, User, BookOpen, Flame } from "lucide-react";

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
