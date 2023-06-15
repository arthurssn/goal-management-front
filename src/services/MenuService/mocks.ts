import { IMenuItem, ISubmenuItem } from "@/interfaces/IMenuItem";

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
    icon: "src/services/MenuService/icons/heart_icon.svg",
    label: "Personal",
    subitems: itemsPersonal,
  },
  {
    icon: "src/services/MenuService/icons/bag_icon.svg",
    label: "Professional",
    subitems: itemsProfessinal,
  },
  {
    icon: "src/services/MenuService/icons/fitness_icon.svg",
    label: "Fitness",
    subitems: itemsFitness,
  },
  {
    icon: "src/services/MenuService/icons/finance_icon.svg",
    label: "Finance",
    subitems: itemsFinance,
  },
];

export const priorities: IMenuItem[] = [
  {
    icon: "src/services/MenuService/icons/star_icon.svg",
    label: "Acc 10k",
  },
  {
    icon: "src/services/MenuService/icons/star_icon.svg",
    label: "Read 24 books",
  },
];
