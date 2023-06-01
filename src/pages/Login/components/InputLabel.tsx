import { ChangeEvent } from "react";
import { InputFormLogin, LabelFormLogin } from "../styles";

interface InputLabelProps {
  placeholder: string;
  type: string;
  icon?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputLabel({
  icon,
  placeholder,
  type,
  onChange,
}: InputLabelProps) {
  return (
    <LabelFormLogin icon={icon}>
      <InputFormLogin
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </LabelFormLogin>
  );
}
