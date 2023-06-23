import AppBaseButton from "../AppBaseButton";
import edit_icon from "../assets/edit_icon.svg";

export default function EditButton({ children, size }: BaseButtonProps) {
  return (
    <AppBaseButton
      color="orange"
      size={size}
      icon={edit_icon}
      children={children}
    />
  );
}
