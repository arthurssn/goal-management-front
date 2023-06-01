import { IUserAuth } from "../interfaces/IUserAuth";
import http from "./http";

export async function loginService(loginData: IUserAuth) {
  try {
    const response = await http.post("/login", loginData);
    return response.data;
  } catch (error) {
    return null;
  }
}
