import styled from "styled-components";

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
