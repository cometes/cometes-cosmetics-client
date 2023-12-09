import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const CollectionSection = styled.section`
  margin-top: 100px;
`;
export const CollectionSubTitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 8px;
`;
export const CollectionTitle = styled.h1`
  color: #222;
  font-family: "AritaBuri";
  font-size: 4rem;
  font-weight: 500;
  word-break: keep-all;
`;
export const CollectionContent = styled.p`
  color: #222;
  line-height: 2.4rem;
  margin-top: 24px;
  word-break: keep-all;
`;
export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 80px 12px;
  margin: 80px 0;

  ${max(506)} {
    grid-template-columns: 1fr 1fr;
  }
`;
