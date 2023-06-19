import { BaseButton } from "../styles";
import trash_icon from "../assets/trash_icon.svg";

export default function DeleteButton({ children, size }: BaseButtonProps) {
  return (
    <>
      <BaseButton color="red" size={size}>
        <img src={trash_icon} /> {children}
      </BaseButton>
    </>
  );
}
