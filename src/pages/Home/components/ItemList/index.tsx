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
import GoalsService from "@/services/GoalsService";
import { GoalStatus } from "@/enums/GoalStatus";
import AppSelect from "@/components/forms/AppSelect";
import { goalStatusOptions } from "@/constants/goalStatusOptions";
import EditButton from "@/components/buttons/EditButton";
import DeleteButton from "@/components/buttons/DeleteButton";

export default function ItemList({
  goal,
  onUpdateStatus,
}: {
  goal: IGoal;
  onUpdateStatus: (id: number, status: GoalStatus) => void;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);

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
              options={goalStatusOptions}
              onChange={tryUpdateGoalStatus}
              value={goal.status}
              onClick={(e) => e.stopPropagation()}
            />
          </StatusSelectContainer>
          {!expanded && <TitleText expanded={expanded}>{goal.title}</TitleText>}
        </TitleContainer>
        <StatusText color={getGoalStatusColor(goal.status)}>
          Status: {getGoalStatusText(goal.status)}
        </StatusText>
        <DeleteButton size="sm" />
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
