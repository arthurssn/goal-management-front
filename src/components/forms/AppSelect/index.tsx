import { IAppSelectProps } from "./interfaces";
import { AppSelectInput } from "./styles";

export default function AppSelect({
  label,
  name,
  id,
  options,
  onChange,
  value,
}: IAppSelectProps) {
  return (
    <AppSelectInput
      name={name}
      id={id}
      label={label}
      options={options}
      onChange={onChange}
      value={value}
    >
      <option value={undefined} disabled>
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
