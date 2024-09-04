"use client";
import React from "react";
import Navbar from "./navbar";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="container fixed top-0 left-0 right-0 z-50 my-2">
      <Navbar />
    </header>
  );
};

export default Header;
