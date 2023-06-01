import { IUserAuth } from "../../interfaces/IUserAuth";

export interface IContext extends IUserAuth {
  login(loginData: IUserAuth): Promise<void>;
  logout(): void;
}
