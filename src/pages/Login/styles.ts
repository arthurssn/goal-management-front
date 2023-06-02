import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import styled from "styled-components";
import { devices } from "../../constants/devices";

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

interface LabelFormLoginProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  icon?: string;
}

export const LabelFormLogin = styled.label<LabelFormLoginProps>`
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    background: url(${(props) => props.icon}) center / contain no-repeat;
  }
`;

export const InputFormLogin = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  padding-bottom: 12px;
  color: rgba(51, 51, 51, 0.5);
  font-weight: 600;
  padding-left: 30px;

  ::placeholder {
    color: rgba(51, 51, 51, 0.5);
    font-weight: 600;
  }

  width: 300px;
  @media ${devices.tablet} {
    width: 430px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

interface ButtonFormLoginProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  icon?: string;
  backgroundColor: string;
  borderColor?: string;
}

export const ButtonFormLogin = styled.button<ButtonFormLoginProps>`
  font-size: 1.25rem;
  font-weight: 600;
  width: 320px;
  height: 60px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 5px;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "transparent"};
  box-shadow: 2px 4px 4px #ff3f34;
  :hover {
    box-shadow: none;
  }
`;

const BaseContainerMessage = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  @media ${devices.tablet} {
    width: 433px;
  }

  display: flex;
  align-items: center;
  padding: 0px 10px;
  font-weight: 600;
`;

export const ContainerErrorMessage = styled(BaseContainerMessage)`
  background-color: rgba(255, 162, 0, 0.75);
`;

export const ContainerSuccessMessage = styled(BaseContainerMessage)`
  background-color: rgba(0, 255, 0, 0.75);
`;
