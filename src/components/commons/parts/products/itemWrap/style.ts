import styled from "@emotion/styled";
import { max, min } from "../../../../../commons/libraries/breakPoints";

export const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & > * {
    margin-left: 20px;
  }
  & span:first-of-type {
    margin-left: 0;
  }

  ${max(1000)} {
    justify-content: flex-start;
  }
`;
export const CategoryTitle = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #222;
`;
export const CategoryIcon = styled.i`
  display: block;
  font-size: 1.6rem;
  height: 1.6rem;
  color: #6d6d6d;
`;
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
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  gap: 80px 12px;
  margin-top: 40px;

  ${max(600)} {
    grid-template-columns: 1fr 1fr;
  }
  ${max(500)} {
    gap: 80px 8px;
  }
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
