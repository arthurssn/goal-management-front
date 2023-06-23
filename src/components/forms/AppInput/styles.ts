import { devices } from "@/constants/devices";
import styled from "styled-components";

export const FormGroup = styled.div<{ size?: string }>`
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  justify-content: left;
  gap: 5px;

  width: 100%;
  @media ${devices.tablet} {
    width: ${(props) => props.size ?? "100%"};
  }
`;

export const Input = styled.input`
  border: rgba(51, 51, 51, 0.5) solid 1px;
  border-radius: 4px;
  padding: 6px 4px;
`;

export const Label = styled.label``;
