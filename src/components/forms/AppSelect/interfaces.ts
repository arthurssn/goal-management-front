import { IAppSelectOptions } from "@/interfaces/forms/IAppSelectOptions";
import { FormInputProps } from "../interfaces";
import { ChangeEvent } from "react";

export interface IAppSelectProps extends FormInputProps {
  label: string;
  name: string;
  id: string;
  options: IAppSelectOptions[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onClick?: React.MouseEventHandler<HTMLSelectElement>; // Atualizado para o tipo correto
  value: string | number | readonly string[] | undefined;
}
