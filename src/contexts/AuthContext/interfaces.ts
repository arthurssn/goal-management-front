import { IUserAuth } from "../../interfaces/IUserAuth";

export interface IAuthContext extends IUserAuth {
  login(loginData: IUserAuth): Promise<void>;
  logout(): void;
}
