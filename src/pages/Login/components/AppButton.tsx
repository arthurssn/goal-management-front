import { MouseEvent } from "react";
import { ButtonFormLogin } from "../styles";
import { Spinner } from "@/styles/spinner";

interface AppButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLLabelElement>) => void;
  color: string;
  backgroundColor: string;
  borderColor?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset"; // Ajuste da tipagem da propriedade type
}

export function AppButton({
  text,
  color,
  backgroundColor,
  borderColor,
  loading,
  type,
  onClick,
}: AppButtonProps) {
  return (
    <ButtonFormLogin
      color={color}
      backgroundColor={backgroundColor}
      type={type ?? "button"}
      borderColor={borderColor}
      onClick={onClick}
    >
      {loading ? <Spinner /> : ""}
      {text}
    </ButtonFormLogin>
  );
}
