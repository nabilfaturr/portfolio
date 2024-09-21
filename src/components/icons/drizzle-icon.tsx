import { SiDrizzle } from "react-icons/si";
import { IconProps } from "@/types";

export const DrizzleIcon: React.FC<IconProps>  = ({ size = 24, color = "white" }) => {
  return <SiDrizzle size={size} color={color} />;
};
