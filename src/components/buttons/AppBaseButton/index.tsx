import { BaseButton } from "../styles";

interface AppBaseButtonProps extends BaseButtonProps {
  color: string;
  icon: string;
}

export default function AppBaseButton({
  children,
  size,
  onClick,
  color,
  icon,
}: AppBaseButtonProps) {
  return (
    <BaseButton color={color} size={size} onClick={onClick}>
      <img src={icon} /> {children}
    </BaseButton>
  );
}
