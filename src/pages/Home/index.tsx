import AppSelect from "@/components/forms/AppSelect";
import { InputWithBorderBottom } from "@/components/forms/InputWithBorderBottom";
import { IAppSelectOptions } from "@/interfaces/forms/IAppSelectOptions";
import search_icon from "@/assets/icons/search_icon.svg";
import { ChangeEvent } from "react";
import {
  CreateButtonContainer,
  InputsFilterContainer,
  ListContainer,
} from "./styles";
import IndexList from "@/components/layout/IndexList";
import CreateButton from "./components/CreateButton";
import ItemList from "./components/ItemList";
export default function Home() {
  const options: IAppSelectOptions[] = [
    { id: 1, label: "Daily", value: 1 },
    { id: 2, label: "Weekly", value: 2 },
    { id: 3, label: "Monthly", value: 3 },
    { id: 4, label: "Annually", value: 4 },
  ];

  function handleSearchItem(e: ChangeEvent<HTMLInputElement>) {
    console.log(e);
  }

  return (
    <IndexList
      title="Goals"
      content={
        <>
          <InputsFilterContainer>
            <AppSelect
              id="deadlineSelect"
              name="deadlineSelect"
              label="Select"
              options={options}
            />
            <InputWithBorderBottom
              icon={search_icon}
              placeholder="Search Items"
              onChange={handleSearchItem}
            />
          </InputsFilterContainer>
          <CreateButtonContainer>
            <CreateButton />
          </CreateButtonContainer>
          <ListContainer>
            <ItemList />
          </ListContainer>
        </>
      }
    />
  );
}
