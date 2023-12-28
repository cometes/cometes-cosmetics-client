import styled from "@emotion/styled";
import { max } from "../../../commons/libraries/breakPoints";

export const MainSection = styled.section`
  margin-top: 180px;

  ${max(768)} {
    margin-top: 140px;
  }
`;
export const MainTitle = styled.h2`
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
  }
`;
export const MainContainer = styled.div`
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
    padding: 0 16px;
  }
`;
export const MainTextBtn = styled.a`
  display: block;
  margin-top: 30px;
  font-family: "Raleway", sans-serif;
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
`;
