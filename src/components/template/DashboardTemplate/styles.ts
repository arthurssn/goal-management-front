import { devices } from "@/constants/devices";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  min-height: 100vh;
  overflow: auto;
  grid-template-columns: 305px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    "header header"
    "main main";
  @media ${devices.laptop} {
    grid-template-areas:
      "header header"
      "sidebar main";
  }
  padding-bottom: 50px;
`;

export const AppSidebar = styled.div`
  grid-area: sidebar;
  display: none;
  @media ${devices.laptop} {
    display: block;
  }
`;

export const AppHeader = styled.div`
  grid-area: header;
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
`;

export const AppMain = styled.div`
  padding: 0px 20px;
  grid-area: main;
  background-color: #fff;
`;
