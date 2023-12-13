import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const ItemSection = styled.section`
  margin-top: 180px;
  &:first-of-type {
    margin-top: 0;
  }
`;
export const ItemTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 80px 12px;
  margin-top: 40px;

  & > div:nth-of-type(-1n + 3) {
    grid-column: span 4;
  }
  & > div:nth-last-of-type(4) {
    grid-row-start: 2;
    grid-column: 1 / span 3;
  }
  & > div:nth-last-of-type(3) {
    grid-row-start: 2;
    grid-column: 4 / span 3;
  }
  & > div:nth-last-of-type(2) {
    grid-row-start: 2;
    grid-column: 7 / span 3;
  }
  & > div:nth-last-of-type(1) {
    grid-row-start: 2;
    grid-column: 10 / span 3;
  }

  ${max(915)} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: auto;

    & > div:nth-of-type(-1n + 3) {
      grid-column: auto;
    }
    & > div:nth-last-of-type(4) {
      grid-row-start: auto;
      grid-column: auto;
    }
    & > div:nth-last-of-type(3) {
      grid-row-start: auto;
      grid-column: auto;
    }
    & > div:nth-last-of-type(2) {
      grid-row-start: auto;
      grid-column: auto;
    }
    & > div:nth-last-of-type(1) {
      grid-row-start: auto;
      grid-column: auto;
    }
  }
  ${max(600)} {
    grid-template-columns: 1fr 1fr;
  }
`;
export const GridDefaultWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 12px;
  margin-top: 40px;

  ${max(1015)} {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  ${max(600)} {
    grid-template-columns: 1fr 1fr;
  }
`;
export const BestTitle = styled.h2`
  font-family: "Raleway";
  font-size: 6rem;
  font-weight: 500;

  ${max(768)} {
    font-size: 3.6rem;
    line-height: 3.4rem;
  }
`;
