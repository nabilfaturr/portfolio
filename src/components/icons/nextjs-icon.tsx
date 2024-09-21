import { IconProps } from "@/types";
import { RiNextjsFill } from "react-icons/ri";

export const NextjsIcon: React.FC<IconProps> = ({ size = 24, color = "white" }) => {
  return (
    <RiNextjsFill size={size} color={color}/>
  );
};
