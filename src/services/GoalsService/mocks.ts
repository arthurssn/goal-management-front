import { GoalStatus } from "@/enums/GoalStatus";
import { IGoal } from "@/interfaces/IGoal";

var dataAtual = new Date();
dataAtual.setFullYear(dataAtual.getFullYear() + 1);

export const goals: IGoal[] = [
  {
    id: 1,
    title: "Study english for 45 minutes",
    status: GoalStatus.Pending,
    description:
      "Study english for 45 minutes, Study english for 45 minutes, Study english for 45 minutes, Study english for 45 minutes, Study english for 45 minutes",
    deadline: new Date(),
  },
  {
    id: 2,
    title: "Acc 10k",
    status: GoalStatus.InProgress,
    description: "Acc 10k",
    deadline: new Date(),
  },
  {
    id: 3,
    title: "Read 24 books",
    status: GoalStatus.InProgress,
    description: "Read 24 books",
    deadline: new Date(),
  },
  {
    id: 4,
    title: "Start learn english",
    status: GoalStatus.Done,
    description: "Buy an English course and get started",
    deadline: new Date(),
  },
];
