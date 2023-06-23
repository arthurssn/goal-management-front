import { IMenuItem, ISubmenuItem } from "@/interfaces/IMenuItem";
import heart_icon from "./icons/heart_icon.svg";
import bag_icon from "./icons/bag_icon.svg";
import fitness_icon from "./icons/fitness_icon.svg";
import finance_icon from "./icons/finance_icon.svg";
import star_icon from "./icons/star_icon.svg";
const itemsPersonal: ISubmenuItem[] = [
  { label: "Read 24 books", color: "rgba(255, 63, 52, 0.5);", path: "/" },
  {
    label: "Watch Flamengo in the Libertadores final",
    color: "rgba(255, 63, 52, 0.5);",
    path: "/",
  },
];

const itemsProfessinal: ISubmenuItem[] = [
  { label: "Learn CI/CD", color: "rgba(56, 182, 255, 0.5);" },
  { label: "Learn React.js", color: "rgba(56, 182, 255, 0.5);" },
];

const itemsFitness: ISubmenuItem[] = [
  { label: "Start at the gym", color: "rgba(126, 216, 208, 0.5)" },
];

const itemsFinance: ISubmenuItem[] = [
  { label: "Have 10k invested", color: "rgba(246, 201, 14, 0.5)" },
];

export const categories: IMenuItem[] = [
  {
    id: 1,
    icon: heart_icon,
    label: "Personal",
    subitems: itemsPersonal,
  },
  {
    id: 2,
    icon: bag_icon,
    label: "Professional",
    subitems: itemsProfessinal,
  },
  {
    id: 3,
    icon: fitness_icon,
    label: "Fitness",
    subitems: itemsFitness,
  },
  {
    id: 4,
    icon: finance_icon,
    label: "Finance",
    subitems: itemsFinance,
  },
];

export const priorities: IMenuItem[] = [
  {
    id: 1,
    icon: star_icon,
    label: "Acc 10k",
  },
  {
    id: 1,
    icon: star_icon,
    label: "Read 24 books",
  },
];
