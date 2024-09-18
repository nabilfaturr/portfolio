import { getLocalImage } from "@/lib/getImage";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type StaticImageProps = {
  src: string;
  alt: string;
  containerClass?: string;
  className?: string;
};

export const StaticImage = async ({
  src,
  alt,
  containerClass,
  className,
  ...props
}: StaticImageProps) => {
  const { img, base64 } = await getLocalImage(src);
  return (
    <div className={cn("relative", containerClass)}>
      <Image
        src={src}
        alt={alt}
        blurDataURL={base64}
        className={cn("object-cover", className)}
        fill
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 50vw"
        placeholder="blur"
        {...props}
      />
    </div>
  );
};

export default StaticImage;
