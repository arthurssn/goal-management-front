import { Deadlines } from "@/enums/Deadlines";
import { GoalStatus } from "@/enums/GoalStatus";
import { IGoal } from "@/interfaces/IGoal";
import GoalsService from "@/services/GoalsService";
import { useEffect, useState } from "react";

export default function useGoals(
  wordSearched: string,
  deadlineFilter: Deadlines | ""
): [
  IGoal[],
  (id: number, status: GoalStatus) => void,
  (id: number) => Promise<unknown>
] {
  const [goals, setGoals] = useState<IGoal[]>([]);

  useEffect(() => {
    async function getGoals() {
      setGoals(await GoalsService.getAll(deadlineFilter));
    }

    getGoals();
  }, [deadlineFilter]);

  const filteredGoals: IGoal[] =
    wordSearched.length > 0
      ? goals.filter((goal) =>
          goal.title.toUpperCase().includes(wordSearched.toUpperCase())
        )
      : goals;

  async function updateGoalStatus(id: number, status: GoalStatus) {
    await GoalsService.updateStatus(id, status);
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => ({
        ...goal,
        status: goal.id === id ? status : goal.status,
      }));
    });
  }

  async function deleteGoal(id: number) {
    try {
      const response = await GoalsService.delete(id);
      const updatedGoals = goals.filter((goal) => goal.id !== id);
      setGoals(updatedGoals);
      return response;
    } catch (error) {
      throw error;
    }
  }

  return [filteredGoals, updateGoalStatus, deleteGoal];
}
