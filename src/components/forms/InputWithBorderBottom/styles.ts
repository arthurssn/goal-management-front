import styled from "styled-components";
import { FormInputProps } from "../interfaces";

interface InputWithLabel extends FormInputProps {
  icon?: string;
}

export const InputWithLabel = styled.label<InputWithLabel>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
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
  padding-bottom: 10px;
  color: #333333;
  opacity: 0.5;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  padding-left: 30px;

  ::placeholder {
    color: #333333;
    opacity: 0.75;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
  }
  width: 100%;
  height: 100%;
`;
