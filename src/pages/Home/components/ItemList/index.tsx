import {
  DescriptionText,
  ExpandButton,
  ItemContent,
  ItemListContainer,
  StatusSelectContainer,
  StatusText,
  TitleContainer,
  TitleText,
} from "./styles";
import chevron from "./chevron.svg";
import { IGoal } from "@/interfaces/IGoal";
import {
  getGoalStatusColor,
  getGoalStatusText,
  reverseGoalEnum,
} from "@/utils/goalUtils";
import { ChangeEvent, useState } from "react";
import { GoalStatus } from "@/enums/GoalStatus";
import AppSelect from "@/components/forms/AppSelect";
import { goalStatusOptions } from "@/constants/goalStatusOptions";
import EditButton from "@/components/buttons/EditButton";
import DeleteButton from "@/components/buttons/DeleteButton";

export default function ItemList({
  goal,
  onUpdateStatus,
  onClickRemove,
}: {
  goal: IGoal;
  onUpdateStatus: (id: number, status: GoalStatus) => void;
  onClickRemove: (id: number) => void;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);

  function toggleExpanded() {
    setExpanded((prev) => !prev);
  }

  function handleUpdateGoalStatus(e: ChangeEvent<HTMLSelectElement>) {
    const status = reverseGoalEnum(Number(e.target.value));
    onUpdateStatus(goal.id, status);
  }

  return (
    <ItemListContainer>
      <ItemContent onClick={toggleExpanded}>
        <TitleContainer>
          <StatusSelectContainer>
            <AppSelect
              id="status"
              name="status"
              label="Select"
              options={goalStatusOptions}
              onChange={handleUpdateGoalStatus}
              value={goal.status}
              onClick={(e) => e.stopPropagation()}
            />
          </StatusSelectContainer>
          {!expanded && <TitleText expanded={expanded}>{goal.title}</TitleText>}
        </TitleContainer>
        <StatusText color={getGoalStatusColor(goal.status)}>
          Status: {getGoalStatusText(goal.status)}
        </StatusText>
        <DeleteButton size="sm" onClick={() => onClickRemove(goal.id)} />
        <EditButton size="sm" />
        <ExpandButton expanded={expanded}>
          <img src={chevron} />
        </ExpandButton>
      </ItemContent>
      {expanded && (
        <>
          <TitleText expanded={expanded}>Title: {goal.title}</TitleText>
          <DescriptionText expanded={expanded}>
            Description: {goal.description ?? "No description"}
          </DescriptionText>
        </>
      )}
    </ItemListContainer>
  );
}
