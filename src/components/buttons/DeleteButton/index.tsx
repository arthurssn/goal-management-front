import trash_icon from "../assets/trash_icon.svg";
import AppBaseButton from "../AppBaseButton";

export default function DeleteButton({
  children,
  size,
  onClick,
}: BaseButtonProps) {
  return (
    <AppBaseButton
      color="red"
      size={size}
      onClick={onClick}
      icon={trash_icon}
      children={children}
    />
  );
}
