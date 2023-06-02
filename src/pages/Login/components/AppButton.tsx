import { MouseEvent } from "react";
import { ButtonFormLogin } from "../styles";
import { Spinner } from "@/styles/spinner";

interface AppButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color: string;
  backgroundColor: string;
  borderColor?: string;
  loading?: boolean;
}

export function AppButton({
  text,
  color,
  backgroundColor,
  borderColor,
  loading,
}: AppButtonProps) {
  return (
    <ButtonFormLogin
      color={color}
      backgroundColor={backgroundColor}
      type="submit"
      borderColor={borderColor}
    >
      {loading ? <Spinner /> : ""}
      {text}
    </ButtonFormLogin>
  );
}
