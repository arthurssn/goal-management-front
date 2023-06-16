import AppSelect from "@/components/forms/AppSelect";
import { InputWithBorderBottom } from "@/components/forms/InputWithBorderBottom";
import { InputsFilterContainer } from "../../styles";
import { IAppSelectOptions } from "@/interfaces/forms/IAppSelectOptions";
import search_icon from "@/assets/icons/search_icon.svg";

export default function Filters({
  deadlineFilter,
  setDeadlineFilter,
  setWordSearched,
}: {
  deadlineFilter: string | number;
  setDeadlineFilter: (e: string) => void;
  setWordSearched: (e: string) => void;
}) {
  const options: IAppSelectOptions[] = [
    { id: 1, label: "Daily", value: 1 },
    { id: 2, label: "Weekly", value: 2 },
    { id: 3, label: "Monthly", value: 3 },
    { id: 4, label: "Annually", value: 4 },
  ];
  return (
    <InputsFilterContainer>
      <AppSelect
        id="deadlineSelect"
        name="deadlineSelect"
        label="Select"
        options={options}
        value={deadlineFilter}
        onChange={(e) => setDeadlineFilter(e.target.value)}
      />
      <InputWithBorderBottom
        icon={search_icon}
        placeholder="Search Items"
        onChange={(e) => setWordSearched(e.target.value)}
      />
    </InputsFilterContainer>
  );
}
