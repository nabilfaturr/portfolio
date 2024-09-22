import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ArrowDown = () => {
  return (
    <div className="flex items-center justify-center absolute bottom-10 left-0 right-0">
      <Link href="#latest-project">
        <ArrowDownIcon className="size-8 text-teal-500 animate-bounce" />
      </Link>
    </div>
  );
};

export default ArrowDown;
