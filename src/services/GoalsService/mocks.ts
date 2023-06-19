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
    title: "Meta Diária",
    deadline: new Date(),
    status: GoalStatus.Done,
  },
  {
    id: 2,
    title: "Meta Semanal",
    deadline: onNextWeek,
    status: GoalStatus.Done,
  },
  {
    id: 3,
    title: "Meta Mensal",
    deadline: inThisMonth,
    status: GoalStatus.Pending,
  },
  {
    id: 4,
    title: "Meta Anual",
    deadline: inThisYear,
    status: GoalStatus.InProgress,
  },
];
