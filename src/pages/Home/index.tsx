import AppSelect from "@/components/forms/AppSelect";
import { InputWithBorderBottom } from "@/components/forms/InputWithBorderBottom";
import { IAppSelectOptions } from "@/interfaces/forms/IAppSelectOptions";
import search_icon from "@/assets/icons/search_icon.svg";
import { useEffect, useState } from "react";
import {
  CreateButtonContainer,
  InputsFilterContainer,
  ListContainer,
} from "./styles";
import IndexList from "@/components/layout/IndexList";
import CreateButton from "./components/CreateButton";
import ItemList from "./components/ItemList";
import { getAll } from "@/services/GoalsService";
import { IGoal } from "@/interfaces/IGoal";
import { GoalStatus } from "@/enums/GoalStatus";
export default function Home() {
  const options: IAppSelectOptions[] = [
    { id: 1, label: "Daily", value: 1 },
    { id: 2, label: "Weekly", value: 2 },
    { id: 3, label: "Monthly", value: 3 },
    { id: 4, label: "Annually", value: 4 },
  ];

  const [goals, setGoals] = useState<IGoal[]>([]);
  const [wordSearched, setWordSearched] = useState<string>("");
  const [deadlineFilter, setDeadlineFilter] = useState<number | string>("");

  async function getGoals() {
    setGoals(await getAll());
  }

  function updateGoalStatus(id: number, status: GoalStatus) {
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => ({
        ...goal,
        status: goal.id === id ? status : goal.status,
      }));
    });
  }

  useEffect(() => {
    getGoals();
  }, []);

  const renderedList =
    wordSearched.length > 0
      ? goals.filter((goal) =>
          goal.title.toLowerCase().includes(wordSearched.toLowerCase())
        )
      : goals;

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
              value={deadlineFilter}
              onChange={(e) => setDeadlineFilter(e.target.value)}
            />
            <InputWithBorderBottom
              icon={search_icon}
              placeholder="Search Items"
              onChange={(e) => setWordSearched(e.target.value)}
            />
          </InputsFilterContainer>
          <CreateButtonContainer>
            <CreateButton />
          </CreateButtonContainer>
          <ListContainer>
            {renderedList.map((goal) => (
              <ItemList
                goal={goal}
                onUpdateStatus={updateGoalStatus}
                key={goal.id}
              />
            ))}
          </ListContainer>
        </>
      }
    />
  );
}
