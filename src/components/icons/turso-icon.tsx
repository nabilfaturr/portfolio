import { SiTurso } from "react-icons/si";
import { IconProps } from "@/types";
export const TursoIcon: React.FC<IconProps> = ({ size = 24, className }) => {
  return <SiTurso size={size} className={className} />;
};
