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
export const ItemContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 80px;

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
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 80px 12px;
  margin-top: 30px;

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
  ${max(500)} {
    gap: 80px 8px;
  }
`;
export const GridDefaultWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 12px;
  margin-top: 30px;

  ${max(1015)} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  ${max(600)} {
    grid-template-columns: 1fr 1fr;
  }
  ${max(500)} {
    gap: 80px 8px;
  }
`;
export const BestTitle = styled.h2`
  font-family: "RaleWay", sans-serif;
  font-size: 6rem;
  line-height: 6rem;
  font-weight: 400;
  letter-spacing: -0.2rem;

  ${max(1015)} {
    font-size: 5rem;
    line-height: 5rem;
  }
  ${max(500)} {
    font-size: 4rem;
    line-height: 4rem;
    padding: 0 16px;
  }
`;
