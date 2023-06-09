import { IAppSelectProps } from "./interfaces";
import { AppSelectInput } from "./styles";

export default function AppSelect({
  label,
  name,
  id,
  options,
  onChange,
  onClick,
  value,
  color,
}: IAppSelectProps) {
  return (
    <AppSelectInput
      name={name}
      id={id}
      label={label}
      options={options}
      onChange={onChange}
      onClick={onClick}
      value={value}
      color={color}
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </AppSelectInput>
  );
}
