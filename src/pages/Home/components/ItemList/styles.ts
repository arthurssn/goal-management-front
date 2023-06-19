import {
  collapseAnimation,
  expandAnimation,
  rotateAnimation,
  rotateAnimationReverse,
} from "@/animations/animations";
import { devices } from "@/constants/devices";
import styled, { css } from "styled-components";

export const ItemListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const ItemContent = styled.div`
  cursor: pointer;
  * {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  display: grid;
  max-width: 100%;
  width: 100%;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
  grid-template-columns: 1fr;
  @media ${devices.tablet} {
    grid-template-columns: 1fr 150px 220px 24px;
    grid-template-rows: 1fr;
  }
`;

export const StatusText = styled.p<{ color: string }>`
  color: ${(props) => props.theme.colors[props.color]};
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 100%;
  overflow: hidden;
`;

export const TitleText = styled.p<{ expanded?: boolean }>`
  flex: 1;
  white-space: ${(props) => (props.expanded ? "wrap" : "nowrap")};
  overflow: hidden;
  text-overflow: ellipsis;
  resize: none;
  max-width: max-content;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const ExpandButton = styled.div<{ expanded: boolean }>`
  cursor: pointer;
  ${({ expanded }) =>
    css`
      img {
        animation: ${expanded ? rotateAnimation : rotateAnimationReverse} 600ms
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
    `}
  display: flex;
  justify-content: center;
  @media ${devices.tablet} {
    display: block;
  }
`;

export const DescriptionText = styled.p<{ expanded: boolean }>`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  ${({ expanded }) =>
    css`
      animation: ${expanded ? expandAnimation : collapseAnimation} 0.6s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
`;

export const StatusSelectContainer = styled.div`
  width: 100%;
  @media ${devices.tablet} {
    width: 120px;
  }
`;
