import add_icon from "../assets/add_icon.svg";
import AppBaseButton from "../AppBaseButton";

export default function CreateButton({
  children,
  size,
  onClick,
}: BaseButtonProps) {
  return (
    <AppBaseButton
      children={children}
      size={size}
      color="green"
      icon={add_icon}
      onClick={onClick}
    />
  );
}
