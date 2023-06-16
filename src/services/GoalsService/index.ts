import { IGoal } from "@/interfaces/IGoal";
import { goals } from "./mocks";
import { GoalStatus } from "@/enums/GoalStatus";
import { Deadlines } from "@/enums/Deadlines";

const GoalsService = {
  getAll: async function (deadlineFilter: Deadlines | ""): Promise<IGoal[]> {
    return new Promise((resolve) => {
      resolve(mockApiGetAll(deadlineFilter));
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

// toda essa filtragem sera feita na API, quando existir
function mockApiGetAll(deadline: Deadlines | "" = "") {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  switch (deadline) {
    case "":
      return goals;
    case Deadlines.Daily:
      return goals.filter((goal) => isSameDay(goal.deadline, today));
    case Deadlines.Weekly:
      return goals.filter(
        (goal) => goal.deadline > today && goal.deadline <= nextWeek
      );
    case Deadlines.Monthly:
      return goals.filter(
        (goal) => goal.deadline > nextWeek && goal.deadline <= nextMonth
      );
    case Deadlines.Annually:
      return goals.filter((goal) => {
        return goal.deadline > nextMonth;
      });
    default:
      return goals;
  }
}

function isSameDay(dateA: Date, dateB: Date): boolean {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}

export default GoalsService;
