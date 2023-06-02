import { InputLabel } from "./components/InputLabel";

import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext/useAuth";
import {
  ContainerPageLogin,
  ContainerFormLogin,
  LoginTitle,
  InputGroup,
  HeaderContainer,
  FormGroup,
  FooterContainer,
  ContainerErrorMessage,
} from "./styles";
import { IUserAuth } from "../../interfaces/IUserAuth";
import { AppButton } from "./components/AppButton";
import { AxiosError } from "axios";

interface ApiResponse {
  error: string;
}

export default function Login() {
  const [user, setUser] = useState<IUserAuth>({ email: "", password: "" });
  const [sendingData, setSendingData] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const authContext = useAuth();
  async function login(e: React.FormEvent) {
    e.preventDefault();
    setSendingData(true);
    try {
      await authContext.login(user);
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      const errorMessage = axiosError.response?.data?.error;
      setErrorMessage(errorMessage);
    } finally {
      setSendingData(false);
    }
  }
  return (
    <ContainerPageLogin>
      <ContainerFormLogin onSubmit={login}>
        <HeaderContainer>
          <LoginTitle>GoalManagement</LoginTitle>
          {errorMessage && (
            <ContainerErrorMessage>{errorMessage}</ContainerErrorMessage>
          )}
        </HeaderContainer>

        <FormGroup>
          <InputGroup>
            <InputLabel
              type="text"
              icon="src/assets/icons/email_icon.svg"
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </InputGroup>

          <InputGroup>
            <InputLabel
              type="password"
              icon="src/assets/icons/lock_icon.svg"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </InputGroup>
        </FormGroup>

        <FooterContainer>
          <AppButton
            text="Login"
            backgroundColor="#ff3f34"
            color="#fff"
            loading={sendingData}
          />
          <p
            style={{
              color: "rgba(102, 102, 102, 0.75)",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            ou
          </p>
          <AppButton
            text="Cadastre-se"
            backgroundColor="#fff"
            color="#333333"
            borderColor="#ff3f34"
          />
        </FooterContainer>
      </ContainerFormLogin>
    </ContainerPageLogin>
  );
}
