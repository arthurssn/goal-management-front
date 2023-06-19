import { BaseButton } from "../styles";
import add_icon from "../assets/add_icon.svg";

interface BaseButtonProps {
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function CreateButton({ children, size }: BaseButtonProps) {
  return (
    <>
      <BaseButton color="green" size={size}>
        <img src={add_icon} /> {children}
      </BaseButton>
    </>
  );
}
