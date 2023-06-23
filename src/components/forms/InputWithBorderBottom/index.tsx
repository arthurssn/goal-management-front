import { ChangeEvent } from "react";
import { InputFormLogin, InputWithLabel } from "./styles";

interface InputLabelProps {
  placeholder: string;
  icon?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputWithBorderBottom({
  icon,
  placeholder,
  onChange,
}: InputLabelProps) {
  return (
    <InputWithLabel icon={icon}>
      <InputFormLogin placeholder={placeholder} onChange={onChange} />
    </InputWithLabel>
  );
}
