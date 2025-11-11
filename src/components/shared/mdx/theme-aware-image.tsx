"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type ThemeAwareImageProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  containerClass?: string;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
};

export const ThemeAwareImage = ({
  lightSrc,
  darkSrc,
  alt,
  containerClass,
  className,
  sizes = "(max-width: 480px) 100vw, (max-width: 768px) 80vw, 50vw",
  width = 1200,
  height = 600,
}: ThemeAwareImageProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "relative bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg",
          containerClass
        )}
      />
    );
  }

  const src = theme === "dark" ? darkSrc : lightSrc;

  return (
    <div className={cn("relative", containerClass)}>
      <Image
        src={src}
        alt={alt}
        className={cn("object-cover border-2 rounded-lg", className)}
        fill
        sizes={sizes}
        priority
      />
    </div>
  );
};

export default ThemeAwareImage;
