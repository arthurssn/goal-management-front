import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
  `;

export const Spinner = styled.div`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: ${(props) => props.color ?? "#fff"} transparent
    ${(props) => props.color ?? "#fff"} transparent;
  animation: ${rotate} 1.2s linear infinite;
  margin-right: 10px;
`;
