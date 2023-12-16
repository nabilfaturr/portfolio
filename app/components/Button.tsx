"use client";

import { IoMoonOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setPopup: Dispatch<SetStateAction<boolean>>;
  popup: boolean;
}

export const MenuButton = ({ setPopup, popup }: Props) => {
  return (
    <>
      <button
        onClick={() => {
          setPopup(!popup);
        }}
        className="flex flex-col items-center gap-[3px] justify-center w-8 h-8 text-center hover:bg-black/10 md:hidden border border-black/60 rounded"
      >
        <FiMenu />
      </button>
    </>
  );
};

export const CloseMenuButton = ({ setPopup, popup }: Props) => {
  return (
    <button
      onClick={() => {
        setPopup(!popup);
      }}
      className="flex flex-col justify-center items-center justify w-8 h-8 text-center hover:bg-black/10 md:hidden border-black/60 border rounded"
    >
      <IoIosClose />
    </button>
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
