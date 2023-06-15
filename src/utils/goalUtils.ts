import { GoalStatus } from "@/enums/GoalStatus";

export function getGoalStatusText(status: GoalStatus): string {
  switch (status) {
    case GoalStatus.Done:
      return "Done";
    case GoalStatus.InProgress:
      return "In Progress";
    case GoalStatus.Pending:
      return "Pending";
    default:
      return "";
  }
}

export function getGoalStatusColor(status: GoalStatus): string {
  switch (status) {
    case GoalStatus.Done:
      return "green";
    case GoalStatus.Pending:
      return "red";
    case GoalStatus.InProgress:
      return "orange";
    default:
      return "red";
  }
}

export function reverseGoalEnum(value: number): GoalStatus {
  switch (value) {
    case 1:
      return GoalStatus.Done;
    case 2:
      return GoalStatus.Pending;
    case 3:
      return GoalStatus.InProgress;
    default:
      throw new Error(`Invalid GoalStatus value: ${value}`);
  }
}
