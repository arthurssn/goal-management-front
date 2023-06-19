import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styled from "styled-components";

interface BaseButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: string;
  size: "sm" | "md" | "lg";
}

export const BaseButton = styled.button<BaseButtonProps>`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors[props.color]};

  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  background-color: transparent;

  border-radius: 6px;

  width: ${(props) => sizes[props.size].width};
  height: ${(props) => sizes[props.size].height};
  padding: ${(props) => sizes[props.size].padding} 0px;
`;

interface Size {
  width: string;
  height: string;
  padding: string;
}

interface Sizes {
  sm: Size;
  md: Size;
  lg: Size;
}

const sizes: Sizes = {
  sm: {
    width: "120px",
    height: "30px",
    padding: "3px",
  },
  md: {
    width: "140px",
    height: "40px",
    padding: "4px",
  },
  lg: {
    width: "160px",
    height: "50px",
    padding: "5px",
  },
};
