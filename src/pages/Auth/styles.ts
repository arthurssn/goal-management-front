import styled from "styled-components";
import { BaseContainerMessage } from "@/styles/containers";
import { devices } from "@/constants/devices";
import { Link } from "react-router-dom";

export const ContainerPageLogin = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ccc;
  display: flex;
  justify-content: center;
`;

export const ContainerFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  width: 700px;
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 75px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
  color: #ff3f34;
`;

export const FormGroup = styled.div`
  margin-bottom: 40px;
`;

export const InputGroup = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContainerErrorMessage = styled(BaseContainerMessage)`
  background-color: ${(props) => props.theme.alertsColor.warning};
  height: 60px;
  width: 320px;
  @media ${devices.tablet} {
    width: 433px;
  }
`;

export const LinkLogin = styled(Link)``;
