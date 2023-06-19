import { useState } from "react";
import {
  CreateButtonContainer,
  ItemContainer,
  ListContainer,
  Separator,
} from "./styles";
import IndexList from "@/components/layout/IndexList";
import ItemList from "./components/ItemList";
import useGoals from "./hooks/useGoals";
import Filters from "./components/Filters";
import { Deadlines } from "@/enums/Deadlines";
import CreateButton from "@/components/buttons/CreateButton";
export default function Home() {
  const [wordSearched, setWordSearched] = useState<string>("");
  const [deadlineFilter, setDeadlineFilter] = useState<Deadlines | "">(
    Deadlines.Daily
  );
  const [renderedList, updateGoalStatus, deleteGoal] = useGoals(
    wordSearched,
    deadlineFilter
  );

  return (
    <IndexList
      title="Goals"
      content={
        <>
          <Filters
            deadlineFilter={deadlineFilter}
            setDeadlineFilter={setDeadlineFilter}
            setWordSearched={setWordSearched}
          />
          <CreateButtonContainer>
            <CreateButton size="md">Create</CreateButton>
          </CreateButtonContainer>
          <ListContainer>
            {renderedList.map((goal) => (
              <ItemContainer key={goal.id}>
                <ItemList
                  goal={goal}
                  onUpdateStatus={updateGoalStatus}
                  onClickRemove={deleteGoal}
                />
                <Separator />
              </ItemContainer>
            ))}
          </ListContainer>
        </>
      }
    />
  );
}
