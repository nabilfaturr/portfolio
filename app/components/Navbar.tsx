"use client";

import { MenuButton, ThemeButton } from "@/app/components/Button";
import Link from "next/link";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [popup, setPopup] = useState(false);
  console.log(popup);

  return (
    <div className="flex justify-between items-center rounded-full">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold md:text-lg">&lt;/nabilfaturr&gt;</h1>
        </Link>
      </div>
      <div className="flex gap-10 items-center">
        <div className="hidden items-center gap-16 md:flex text-slate-900 font-medium">
          <Menu/>
        </div>
        <div className="flex gap-2 items-center">
          <MenuButton setPopup={setPopup} popup={popup} />
          {popup && <PopupMenu />}
        </div>
      </div>
    </div>
  );
};

const Menu = ({ style = `menu px-4 py-2 hover:bg-slate-100 rounded-lg` }) => {
  return (
    <>
      <Link className={`${style}`} href={"/blog"}>
        <span className="blog-gradient">Blog</span>
      </Link>
      <Link className={`${style}`} href={"/projects"}>
        <span className="projects-gradient">Projects</span>
      </Link>
      <Link className={`${style}`} href={"/uses"}>
        <span className="uses-gradient">Uses</span>
      </Link>
      <Link className={`${style}`} href={"/about"}>
        <span className="about-gradient">About</span>
      </Link>
    </>
  );
};

const PopupMenu = () => {
  return (
    <div className="w-32 h-40 border border-black absolute top-[50px] right-4 rounded-lg">
      <Menu style={"flex menu px-4 py-2 hover:bg-slate-100 rounded-lg "} />
    </div>
  );
};

export default Navbar;
