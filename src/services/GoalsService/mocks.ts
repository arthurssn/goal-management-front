import { GoalStatus } from "@/enums/GoalStatus";
import { IGoal } from "@/interfaces/IGoal";

const onNextWeek = new Date();
onNextWeek.setDate(onNextWeek.getDate() + 2);
const inThisMonth = new Date();
inThisMonth.setDate(inThisMonth.getDate() + 15);
const inThisYear = new Date();
inThisYear.setMonth(inThisMonth.getMonth() + 5);
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
    title: "start learning english",
    status: GoalStatus.Done,
    description: "Buy an English course and get started",
    deadline: new Date(),
  },
  {
    id: 5,
    title: "Meta Diária",
    deadline: new Date(),
    status: GoalStatus.InProgress,
  },
  {
    id: 6,
    title: "Meta Semanal",
    deadline: onNextWeek,
    status: GoalStatus.Done,
  },
  {
    id: 7,
    title: "Meta Mensal",
    deadline: inThisMonth,
    status: GoalStatus.Pending,
  },
  {
    id: 8,
    title: "Meta Anual",
    deadline: inThisYear,
    status: GoalStatus.InProgress,
  },
];
