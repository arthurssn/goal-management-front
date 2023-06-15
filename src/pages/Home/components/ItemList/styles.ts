import styled from "styled-components";

export const ItemListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid #cccccc;
`;

export const ItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  * {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;
