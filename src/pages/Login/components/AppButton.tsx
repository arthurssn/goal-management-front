import { MouseEvent } from "react";
import { ButtonFormLogin } from "../styles";

interface AppButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color: string;
  backgroundColor: string;
  borderColor?: string;
}

export function AppButton({
  text,
  color,
  backgroundColor,
  borderColor,
}: AppButtonProps) {
  return (
    <ButtonFormLogin
      color={color}
      backgroundColor={backgroundColor}
      type="submit"
      borderColor={borderColor}
    >
      {text}
    </ButtonFormLogin>
  );
}
