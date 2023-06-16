import { Deadlines } from "@/enums/Deadlines";
import { GoalStatus } from "@/enums/GoalStatus";
import { IGoal } from "@/interfaces/IGoal";
import GoalsService from "@/services/GoalsService";
import { useEffect, useState } from "react";

export default function useGoals(
  wordSearched: string,
  deadlineFilter: Deadlines | ""
): [IGoal[], (id: number, status: GoalStatus) => void] {
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

  function updateGoalStatus(id: number, status: GoalStatus) {
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => ({
        ...goal,
        status: goal.id === id ? status : goal.status,
      }));
    });
  }
  return [filteredGoals, updateGoalStatus];
}
