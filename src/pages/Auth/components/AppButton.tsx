import { MouseEvent } from "react";
import { ButtonFormLogin } from "./styles";
import { Spinner } from "@/styles/spinner";

interface AppButtonProps {
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLLabelElement>) => void;
  color: string;
  backgroundColor: string;
  borderColor?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

export function AppButton({
  children,
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
      {loading && <Spinner />}
      {children}
    </ButtonFormLogin>
  );
}
