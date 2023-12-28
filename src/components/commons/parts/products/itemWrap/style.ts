import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const ItemTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const ItemContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  ${max(1215)} {
    width: 100%;
    padding: 0 40px;
  }
  ${max(768)} {
    padding: 0 24px;
  }
  ${max(500)} {
    padding: 0;
  }
`;
export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  gap: 80px 12px;
  margin-top: 40px;

  ${max(600)} {
    grid-template-columns: 1fr 1fr;
  }
  ${max(500)} {
    gap: 80px 8px;
  }
`;
