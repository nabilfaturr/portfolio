import { IconProps } from "@/types";
import { RiTailwindCssFill } from "react-icons/ri";

export const TailwindIcon: React.FC<IconProps> = ({ size = 24, color = "white" }) => {
  return <RiTailwindCssFill size={size} color={color} />;
};
