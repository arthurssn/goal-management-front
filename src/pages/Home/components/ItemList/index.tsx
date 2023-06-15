import {
  DescriptionText,
  ExpandButton,
  ItemContent,
  ItemListContainer,
  Separator,
  StatusSelectContainer,
  StatusText,
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
import { updateStatus } from "@/services/GoalsService";
import { GoalStatus } from "@/enums/GoalStatus";
import AppSelect from "@/components/forms/AppSelect";

export default function ItemList({
  goal,
  onUpdateStatus,
}: {
  goal: IGoal;
  onUpdateStatus: (id: number, status: GoalStatus) => void;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const statusOptions = [
    { id: 3, label: "Done", value: 1 },
    { id: 1, label: "Pending", value: 2 },
    { id: 2, label: "In Progress", value: 3 },
  ];
  function toggleExpanded() {
    setExpanded((prev) => !prev);
  }

  function tryUpdateGoalStatus(e: ChangeEvent<HTMLSelectElement>) {
    const status = reverseGoalEnum(Number(e.target.value));
    updateStatus(goal.id, status).then(() => {
      onUpdateStatus(goal.id, status);
    });
  }

  return (
    <ItemListContainer>
      <ItemContent>
        <TitleText>
          <StatusSelectContainer>
            <AppSelect
              id="status"
              label="Select"
              name="status"
              options={statusOptions}
              onChange={tryUpdateGoalStatus}
              value={goal.status}
            />
          </StatusSelectContainer>
          {goal.title}
        </TitleText>
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
