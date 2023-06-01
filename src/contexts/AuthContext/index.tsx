import { createContext, useEffect, useState } from "react";
import { IContext } from "./interfaces";
import { IContextProvider } from "@/interfaces/IContextProvider";
import { IUserAuth } from "@/interfaces/IUserAuth";
import { loginService } from "@/services/AuthService";

import {
  getUserLocalStorage,
  setUserLocalStorage,
} from "../../utils/localStorageAccess";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IContextProvider) => {
  const [user, setUser] = useState<IUserAuth | null>();

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      setUser(user);
      return;
    }

    setUser(null);
  }, []);

  async function login(loginData: IUserAuth): Promise<void> {
    const response = await loginService(loginData);

    const payload = { token: response?.token, email: loginData.email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }
  return (
    <AuthContext.Provider value={{ ...user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
