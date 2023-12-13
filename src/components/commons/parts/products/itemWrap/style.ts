import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const ItemTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 80px 12px;
  margin-top: 40px;

  ${max(600)} {
    grid-template-columns: 1fr 1fr;
  }
`;
