import { GoalStatus } from "@/enums/GoalStatus";
import { IGoal } from "@/interfaces/IGoal";

export const goals: IGoal[] = [
  {
    id: 13289,
    title: "Study english for 45 minutes",
    status: GoalStatus.Pending,
    description:
      "Study english for 45 minutes, Study english for 45 minutes, Study english for 45 minutes, Study english for 45 minutes, Study english for 45 minutes",
    deadline: new Date(),
  },
];
