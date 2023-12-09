import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const HelpWrap = styled.div`
  display: flex;
  margin-top: 80px;

  ${max(1015)} {
    margin-top: 40px;
  }
  ${max(768)} {
    margin-top: 20px;
  }
`;
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  ${max(1450)} {
    width: 100%;
    padding: 0 40px;
  }
  ${max(1215)} {
    width: 1000px;
    padding: 0;
  }
  ${max(1015)} {
    width: 100%;
    padding: 0 40px;
  }
  ${max(768)} {
    width: 100%;
    padding: 0 16px;
  }
`;
export const HelpTitle = styled.h2`
  font-size: 6rem;
  line-height: 5.5rem;
  font-weight: 300;

  ${max(1015)} {
    font-size: 5rem;
  }
  ${max(768)} {
    font-size: 3.6rem;
  }
`;
export const HelpBox = styled.div`
  margin-left: 12px;
  &:first-of-type {
    margin-left: 0;
  }

  ${max(768)} {
    margin-left: 6px;
  }
`;
export const HelpImg = styled.img`
  display: block;
  max-width: 100%;
`;
export const HelpText = styled.p`
  font-size: 2.4rem;
  margin-top: 20px;

  ${max(1015)} {
    font-size: 2rem;
  }
`;
export const HelpContent = styled.p`
  margin-top: 10px;

  ${max(1015)} {
    font-size: 1.4rem;
  }
`;
export const HelpTextBtn = styled.a`
  display: block;
  margin-top: 30px;
  text-decoration: underline;
  cursor: pointer;

  ${max(1015)} {
    font-size: 1.4rem;
    margin-top: 16px;
  }
`;
