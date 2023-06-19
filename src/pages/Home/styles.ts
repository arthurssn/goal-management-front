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

export const CreateButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;

export const ListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Separator = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
