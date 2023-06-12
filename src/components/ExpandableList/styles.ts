import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
 0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(90deg);
  }
`;

const rotateAnimationReverse = keyframes`
 0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0);
  }
`;

export const HeaderContainer = styled.div<{ expanded: boolean }>`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.textColors.primaryColor};
  cursor: pointer;
  overflow-y: hidden;
  user-select: none;

  ${({ expanded }) =>
    css`
      img {
        animation: ${expanded ? rotateAnimation : rotateAnimationReverse} 600ms
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
    `}
`;

export const Content = styled.div`
  * {
    cursor: pointer;
    user-select: none;
  }
  overflow: hidden;
`;

export const List = styled.ul<{ expanded: boolean }>`
  padding-left: 15px;
  list-style: none;
  li {
    margin-top: 10px;
  }
`;

export const ItemListContainer = styled.li<{ expanded: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  img {
    width: 24px;
    height: 24px;
  }

  p {
    width: 100%;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
  }

  ${({ expanded }) =>
    css`
      img:last-child {
        animation: ${expanded ? rotateAnimation : rotateAnimationReverse} 600ms
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
    `}
`;

export const SubItemListContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 5px;
  gap: 5px;

  width: 255px;
  height: fit-content;

  background: ${(props) => props.color};
  border-radius: 5px;

  flex: none;
  order: 0;
  flex-grow: 0;

  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  color: ${(props) => props.theme.textColors.primaryColor};
`;
