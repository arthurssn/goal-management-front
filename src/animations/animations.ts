import { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(90deg);
  }
`;

export const rotateAnimationReverse = keyframes`
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0);
  }
`;

export const expandAnimation = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const collapseAnimation = keyframes`
  0%{
    opacity: 1;
  }

  100%{
    opacity: 0;
  }
`;
