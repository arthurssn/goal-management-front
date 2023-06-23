import { InputLabel } from "../components/InputLabel";
import { AppButton } from "../components/AppButton";

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

import name_crach_icon from "@/assets/icons/name_crach_icon.svg";
import email_icon from "@/assets/icons/email_icon.svg";
import lock_icon from "@/assets/icons/lock_icon.svg";

import { useTheme } from "@/hooks/useTheme";

import { IUserAuth } from "@/interfaces/IUserAuth";

import React, { useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface ApiResponse {
  error: string;
}

export default function Register() {
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
              icon={name_crach_icon}
              placeholder="Name"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </InputGroup>

          <InputGroup>
            <InputLabel
              type="text"
              icon={email_icon}
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </InputGroup>

          <InputGroup>
            <InputLabel
              type="password"
              icon={lock_icon}
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </InputGroup>
        </FormGroup>

        <FooterContainer>
          <AppButton
            type="submit"
            backgroundColor={theme.colors.red}
            color={theme.colors.white}
            loading={sendingData}
          >
            Register
          </AppButton>
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
            backgroundColor="#fff"
            color="#333333"
            borderColor={theme.colors.red}
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </AppButton>
        </FooterContainer>
      </ContainerFormLogin>
    </ContainerPageLogin>
  );
}
