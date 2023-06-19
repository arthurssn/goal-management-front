import { BaseButton } from "../styles";
import edit_icon from "../assets/edit_icon.svg";

interface BaseButtonProps {
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function EditButton({ children, size }: BaseButtonProps) {
  return (
    <>
      <BaseButton color="orange" size={size}>
        <img src={edit_icon} /> {children}
      </BaseButton>
    </>
  );
}
