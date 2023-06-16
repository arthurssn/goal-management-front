import AppSelect from "@/components/forms/AppSelect";
import { InputWithBorderBottom } from "@/components/forms/InputWithBorderBottom";
import { InputsFilterContainer } from "../../styles";
import { IAppSelectOptions } from "@/interfaces/forms/IAppSelectOptions";
import search_icon from "@/assets/icons/search_icon.svg";
import { Deadlines } from "@/enums/Deadlines";
import { reverseDeadlineEnum } from "@/utils/deadlineUtils";

export default function Filters({
  deadlineFilter,
  setDeadlineFilter,
  setWordSearched,
}: {
  deadlineFilter: string | number;
  setDeadlineFilter: (e: Deadlines | "") => void;
  setWordSearched: (e: string) => void;
}) {
  const options: IAppSelectOptions[] = [
    { id: 1, label: "All", value: "" },
    { id: 2, label: "Daily", value: Deadlines.Daily },
    { id: 3, label: "Weekly", value: Deadlines.Weekly },
    { id: 4, label: "Monthly", value: Deadlines.Monthly },
    { id: 5, label: "Annually", value: Deadlines.Annually },
  ];
  return (
    <InputsFilterContainer>
      <AppSelect
        id="deadlineSelect"
        name="deadlineSelect"
        label="Select"
        options={options}
        value={deadlineFilter}
        onChange={(e) =>
          setDeadlineFilter(
            e.target.value === "" ? "" : reverseDeadlineEnum(e.target.value)
          )
        }
      />
      <InputWithBorderBottom
        icon={search_icon}
        placeholder="Search Items"
        onChange={(e) => setWordSearched(e.target.value)}
      />
    </InputsFilterContainer>
  );
}
