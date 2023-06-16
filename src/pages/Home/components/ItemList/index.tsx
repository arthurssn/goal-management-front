import {
  DescriptionText,
  ExpandButton,
  ItemContent,
  ItemListContainer,
  Separator,
  StatusSelectContainer,
  StatusText,
  TitleContainer,
} from "./styles";
import chevron from "./chevron.svg";
import { IGoal } from "@/interfaces/IGoal";
import {
  getGoalStatusColor,
  getGoalStatusText,
  reverseGoalEnum,
} from "@/utils/goalUtils";
import { ChangeEvent, useState } from "react";
import GoalsService from "@/services/GoalsService";
import { GoalStatus } from "@/enums/GoalStatus";
import AppSelect from "@/components/forms/AppSelect";
import { goalStatusOptions } from "@/constants/goalStatusOptions";

export default function ItemList({
  goal,
  onUpdateStatus,
}: {
  goal: IGoal;
  onUpdateStatus: (id: number, status: GoalStatus) => void;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const statusOptions = goalStatusOptions;

  function toggleExpanded() {
    setExpanded((prev) => !prev);
  }

  function tryUpdateGoalStatus(e: ChangeEvent<HTMLSelectElement>) {
    const status = reverseGoalEnum(Number(e.target.value));
    GoalsService.updateStatus(goal.id, status).then(() => {
      onUpdateStatus(goal.id, status);
    });
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
              options={statusOptions}
              onChange={tryUpdateGoalStatus}
              value={goal.status}
              onClick={(e) => e.stopPropagation()}
            />
          </StatusSelectContainer>
          {goal.title}
        </TitleContainer>
        <StatusText color={getGoalStatusColor(goal.status)}>
          Status: {getGoalStatusText(goal.status)}
        </StatusText>
        <span>Deadline: {goal.deadline.toLocaleDateString()} </span>
        <ExpandButton onClick={toggleExpanded}>
          <img src={chevron} />
        </ExpandButton>
      </ItemContent>
      {expanded && <DescriptionText>{goal.description}</DescriptionText>}
      <Separator />
    </ItemListContainer>
  );
}
