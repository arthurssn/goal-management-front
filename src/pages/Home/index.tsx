import { useState } from "react";
import { CreateButtonContainer, ListContainer } from "./styles";
import IndexList from "@/components/layout/IndexList";
import CreateButton from "./components/CreateButton";
import ItemList from "./components/ItemList";
import useGoals from "./hooks/useGoals";
import Filters from "./components/Filters";
export default function Home() {
  const [wordSearched, setWordSearched] = useState<string>("");
  const [deadlineFilter, setDeadlineFilter] = useState<number | string>("");
  const [renderedList, updateGoalStatus] = useGoals(wordSearched);

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
