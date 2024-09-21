import { SiTurso } from "react-icons/si";
import { IconProps } from "@/types";
export const TursoIcon: React.FC<IconProps> = ({ size = 24, color = "white" }) => {
  return <SiTurso size={size} color={color} />;
};
