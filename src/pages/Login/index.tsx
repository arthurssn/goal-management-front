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
} from "./styles";
import { IUserAuth } from "../../interfaces/IUserAuth";
import { AppButton } from "./components/AppButton";

export default function Login() {
  const authContext = useAuth();

  const [user, setUser] = useState<IUserAuth>({ email: "", password: "" });

  function login(e: React.FormEvent) {
    e.preventDefault();
    authContext.login(user);
  }
  return (
    <ContainerPageLogin>
      <ContainerFormLogin onSubmit={login}>
        <HeaderContainer>
          <LoginTitle>GoalManagement</LoginTitle>
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
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </InputGroup>
        </FormGroup>

        <FooterContainer>
          <AppButton text="Login" backgroundColor="#ff3f34" color="#fff" />
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
