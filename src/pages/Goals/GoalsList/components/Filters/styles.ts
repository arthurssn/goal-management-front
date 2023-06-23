import { devices } from "@/constants/devices";
import styled from "styled-components";

export const InputsFilterContainer = styled.div`
  display: flex;
  gap: 30px;
  * {
    height: 35px;
  }
  flex-direction: column;
  @media ${devices.tablet} {
    flex-direction: row;
  }
`;
