import { InputLabel } from "../components/InputLabel";

import React, { useState } from "react";

import { useAuth } from "@/hooks/useAuth";

import {
  ContainerPageLogin,
  ContainerFormLogin,
  LoginTitle,
  InputGroup,
  HeaderContainer,
  FormGroup,
  FooterContainer,
  ContainerErrorMessage,
} from "../styles";

import { IUserAuth } from "@/interfaces/IUserAuth";
import { AppButton } from "../components/AppButton";
import { AxiosError } from "axios";
import { useTheme } from "@/hooks/useTheme";
import { useNavigate } from "react-router-dom";

interface ApiResponse {
  error: string;
}

export default function Login() {
  const [user, setUser] = useState<IUserAuth>({ email: "", password: "" });
  const [sendingData, setSendingData] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const { theme } = useTheme();
  const authContext = useAuth();
  const navigate = useNavigate();
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
            type="submit"
            text="Login"
            backgroundColor={theme.colors.red}
            color={theme.colors.white}
            loading={sendingData}
          />
          <p
            style={{
              color: theme.colors.lightTextColor,
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            ou
          </p>
          <AppButton
            text="Register"
            backgroundColor="#fff"
            color={theme.colors.darkTextColor}
            borderColor={theme.colors.red}
            type="button"
            onClick={() => navigate("/register")}
          />
        </FooterContainer>
      </ContainerFormLogin>
    </ContainerPageLogin>
  );
}
