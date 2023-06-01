import { IUserAuth } from "../interfaces/IUserAuth";

export function getUserLocalStorage() {
  const string = localStorage.getItem("u");

  if (!string) return null;

  const json = JSON.parse(string);

  return json || null;
}

export function setUserLocalStorage(user: IUserAuth | null) {
  localStorage.setItem("u", JSON.stringify(user));
}
