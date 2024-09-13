"use client";

import { cn } from "@/lib/utils";
import { Check, Share2 } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Share = () => {
  const pathname = usePathname();
  const [isCopied, setIsCopied] = React.useState(false);

  const handleShare = () => {
    const url = `https://nabilfaturr.site${pathname}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
  };

  return (
    <button
      onClick={handleShare}
      className={cn(
        `absolute bg-background/40 backdrop-blur top-2 right-2 inline-flex p-2 sm:p-3 rounded-full hover:bg-background/70 transition-all duration-300`,
        isCopied && "bg-green-500 hover:bg-green-600"
      )}
    >
      <div className="relative w-4 h-4 md:w-5 md:h-5">
        <Share2
          className={cn(
            "w-4 h-4 md:w-5 md:h-5 text-white absolute top-0 left-0 transition-all duration-300",
            isCopied ? "opacity-0 scale-50" : "opacity-100 scale-100"
          )}
        />
        <Check
          className={cn(
            "w-4 h-4 md:w-5 md:h-5 text-white absolute top-0 left-0 transition-all duration-300",
            isCopied ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}
        />
      </div>
    </button>
  );
};

export default Share;
