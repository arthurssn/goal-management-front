import { IGoal } from "@/interfaces/IGoal";
import { goals } from "./mocks";
import { GoalStatus } from "@/enums/GoalStatus";

const GoalsService = {
  getAll: async function (): Promise<IGoal[]> {
    return new Promise((resolve) => {
      resolve(goals);
    });
  },

  updateStatus: function (id: number, status: GoalStatus) {
    return new Promise((resolve) => {
      const goal = goals.find((goal) => goal.id == id);
      if (goal) goal.status = status;
      setTimeout(() => {
        resolve(null);
      }, 100);
    });
  },
};

export default GoalsService;
