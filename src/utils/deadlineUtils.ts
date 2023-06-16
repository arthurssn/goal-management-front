import { Deadlines } from "@/enums/Deadlines";

export function reverseDeadlineEnum(value: string): Deadlines {
  switch (value) {
    case "d":
      return Deadlines.Daily;
    case "a":
      return Deadlines.Annually;
    case "m":
      return Deadlines.Monthly;
    case "w":
      return Deadlines.Weekly;
    default:
      throw new Error(`Invalid Dealine value: ${value}`);
  }
}
