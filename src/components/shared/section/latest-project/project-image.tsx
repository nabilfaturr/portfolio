import React from "react";
import StaticImage from "../../static-image";

const ProjectImage = ({
  title,
  thumbnail,
}: {
  title: string;
  thumbnail: string;
}) => {
  return (
    <div>
      <StaticImage
        src={thumbnail}
        alt={title}
        containerClass="aspect-video overflow-hidden border rounded-md"
      />
    </div>
  );
};

export default ProjectImage;
