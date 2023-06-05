import { devices } from "@/constants/devices";
import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import styled from "styled-components";

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
