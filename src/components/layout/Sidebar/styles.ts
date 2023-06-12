import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor + "1a"};
  width: 100%;
  height: 100%;
  padding: 40px 15px;
`;

export const SeparatorLine = styled.div`
  margin: 25px 0;
  width: 265px;
  height: 0px;
  border: 1px solid #cccccc;
`;
