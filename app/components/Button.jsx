"use client";

import { IoMoonOutline } from "react-icons/io5";

export const MenuButton = ({ setPopup, popup }) => {
  return (
    <>
      <button
        onClick={() => {
          setPopup(!popup);
        }}
        className="flex flex-col items-center gap-[3px] justify-center w-8 h-8 rounded text-center hover:bg-black/10 md:hidden border rounded"
      >
        <div className="w-4 h-[2px] bg-black/80 top-2 rounded-full"></div>
        <div className="w-3 h-[2px] bg-black/80 top-2 rounded-full self"></div>
        <div className="w-4 h-[2px] bg-black/80 top-2 rounded-full"></div>
      </button>
    </>
  );
};

export const ThemeButton = () => {
  return (
    <>
      <button className="absolute bottom-10 right-10 flex items-center border border-black justify-center w-10 h-10 rounded-full text-center hover:bg-slate-100">
        <IoMoonOutline className="w-6 h-6" />
      </button>
    </>
  );
};
