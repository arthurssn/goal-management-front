import { IGoal } from "@/interfaces/IGoal";
import { goals } from "./mocks";
import { GoalStatus } from "@/enums/GoalStatus";

export function getAll(): Promise<IGoal[]> {
  return new Promise((resolve) => {
    resolve(goals);
  });
}

export async function updateStatus(id: number, status: GoalStatus) {
  return new Promise((resolve) => {
    const goal = goals.find((goal) => goal.id == id);
    if (goal) goal.status = status;
    setTimeout(() => {
      resolve(null);
    }, 100);
  });
}
