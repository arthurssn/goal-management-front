import { IGoal } from "@/interfaces/IGoal";
import { goals } from "./mocks";
import { GoalStatus } from "@/enums/GoalStatus";

export function getAll(): Promise<IGoal[]> {
  return new Promise((resolve) => {
    resolve(goals);
  });
}

export function updateStatus(id: number, status: GoalStatus) {
  const goal = goals.find((goal) => goal.id == id);
  if (goal) goal.status = status;
}
