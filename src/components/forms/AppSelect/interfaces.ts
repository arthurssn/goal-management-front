import { IAppSelectOptions } from "@/interfaces/forms/IAppSelectOptions";
import { FormInputProps } from "../interfaces";

export interface IAppSelectProps extends FormInputProps {
  label: string;
  name: string;
  id: string;
  options: IAppSelectOptions[];
}
