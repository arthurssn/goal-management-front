import { GoalStatus } from "@/enums/GoalStatus";

export interface IGoal {
  id: number;
  title: string;
  deadline: Date;
  status: GoalStatus;
  description?: string;
  subGoal?: IGoal;
}
