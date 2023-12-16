"use client";

import {
  MenuButton,
  ThemeButton,
  CloseMenuButton,
} from "@/app/components/Button";
import Link from "next/link";
import "./Navbar.css";
import { Dispatch, SetStateAction, useState } from "react";

const links = [
  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Projects",
    href: "/projects",
  },

  {
    label: "Uses",
    href: "/uses",
  },

  {
    label: "About",
    href: "/about",
  },
];

const Navbar = () => {
  const [popup, setPopup] = useState(false);

  return (
    <nav className="flex justify-between items-center rounded-full mdtext-lg">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold">&lt;/nabilfaturr&gt;</h1>
        </Link>
      </div>
      <div className="flex gap-10 items-center">
        <div className="hidden items-center gap-16 md:flex text-slate-900 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:bg-slate-200 rounded px-2 py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          {popup ? (
            <CloseMenuButton popup={popup} setPopup={setPopup} />
          ) : (
            <MenuButton setPopup={setPopup} popup={popup} />
          )}
          {popup && <PopupMenu setPopup={setPopup} />}
        </div>
      </div>
    </nav>
  );
};

interface PopupProps {
  setPopup: Dispatch<SetStateAction<boolean>>;
}

const PopupMenu = ({ setPopup }: PopupProps) => {
  return (
    <div className="flex flex-col w-32 h-[164px p-1 border border-black absolute top-[50px] right-4 rounded md:hidden">
      {links.map((link) => (
        <Link
          onClick={() => {
            setPopup(false);
          }}
          key={link.href}
          href={link.href}
          className="hover:bg-slate-200 rounded px-2 py-1"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
