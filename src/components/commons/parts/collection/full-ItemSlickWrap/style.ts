import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const FullSection = styled.section<{
  background: string;
}>`
  width: 100%;
  background-color: ${props => props.background};
  padding: 80px 0;
  margin-top: 140px;

  ${max(1215)} {
    padding: 60px 0;
  }
`;
export const GridWrap = styled.div`
  margin-top: 30px;
`;

