import { IAppSelectProps } from "./interfaces";
import { AppSelectInput } from "./styles";

export default function AppSelect({
  label,
  name,
  id,
  options,
  width,
}: IAppSelectProps) {
  return (
    <AppSelectInput
      name={name}
      id={id}
      width={width}
      label={label}
      options={options}
    >
      <option value={undefined} disabled>
        {label}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </AppSelectInput>
  );
}
