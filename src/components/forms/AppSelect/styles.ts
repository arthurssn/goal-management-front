import styled from "styled-components";
import { IAppSelectProps } from "./interfaces";

export const AppSelectInput = styled.select<IAppSelectProps>`
  border-radius: 5px;
  height: 100%;
  width: 100%;
  color: #333333;
  opacity: 0.5;

  font-family: Quicksand;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5625rem;
  text-align: left;

  option:checked {
    background-color: ${(props) => props.theme.colors.primaryColor};
  }

  border: 1px solid #33333380;
`;
