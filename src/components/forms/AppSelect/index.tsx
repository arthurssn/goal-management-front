import { IAppSelectProps } from "./interfaces";
import { AppSelectInput } from "./styles";

export default function AppSelect({
  label,
  name,
  id,
  options,
  width,
  onChange,
}: IAppSelectProps) {
  return (
    <AppSelectInput
      name={name}
      id={id}
      width={width}
      label={label}
      options={options}
      onChange={onChange}
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
