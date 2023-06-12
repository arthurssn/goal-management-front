import { IMenuItem } from "@/interfaces/IMenuItem";
import { categories, priorities } from "./mocks";

export async function getMenuCategories(): Promise<IMenuItem[]> {
  return new Promise((resolve) => {
    resolve(categories);
  });
}

export async function getMenuPriority(): Promise<IMenuItem[]> {
  return new Promise((resolve) => {
    resolve(priorities);
  });
}
