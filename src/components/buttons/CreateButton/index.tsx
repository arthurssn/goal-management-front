import { BaseButton } from "../styles";
import add_icon from "../assets/add_icon.svg";

export default function CreateButton({ children, size }: BaseButtonProps) {
  return (
    <>
      <BaseButton color="green" size={size}>
        <img src={add_icon} /> {children}
      </BaseButton>
    </>
  );
}
