import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {

  return (
    <ul className="flex gap-3 mt-5">
      <li className="border p-2 hover:bg-slate-100 rounded-xl">
        <FaGithub className="w-6 h-6 text-slate-600" />
      </li>
      <li className="border p-2 hover:bg-slate-100 rounded-xl">
        <FaLinkedinIn className="w-6 h-6 text-slate-600" />
      </li>
      <li className="border p-2 hover:bg-slate-100 rounded-xl">
        <FaTwitter className="w-6 h-6 text-slate-600" />
      </li>
    </ul>
  );
};

export default SocialMedia;
