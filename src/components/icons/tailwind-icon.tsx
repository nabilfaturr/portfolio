import { IconProps } from "@/types";
import { RiTailwindCssFill } from "react-icons/ri";

export const TailwindIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  return <RiTailwindCssFill size={size} className={className} />;
};
