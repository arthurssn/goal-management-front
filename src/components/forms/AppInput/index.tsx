import { FormGroup, Input, Label } from "./styles";
import { ChangeEvent } from "react";

interface IAppInputProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type: "text" | "password" | "number" | "email" | "file";
  size?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function AppInput({
  type,
  placeholder,
  onChange,
  label,
  size,
  id,
  name,
}: IAppInputProps) {
  return (
    <FormGroup size={size}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        name={name ?? id}
      />
    </FormGroup>
  );
}
