import { SiDrizzle } from "react-icons/si";
import { IconProps } from "@/types";

export const DrizzleIcon: React.FC<IconProps>  = ({ size = 24, className }) => {
  return <SiDrizzle size={size} className={className} />;
};
