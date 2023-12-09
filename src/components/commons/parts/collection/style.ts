import styled from "@emotion/styled";
import { min, max } from "../../../../commons/libraries/breakPoints";

export const FlexWrap = styled.div`
  display: flex;

  ${max(1215)} {
    flex-direction: column;
  }
`;
export const AsideWrap = styled.aside`
  width: 30%;

  ${max(1215)} {
    width: 100%;
  }
`;
export const AsideBox = styled.div`
  position: sticky;
  top: 80px;
  ${max(1215)} {
    display: none;
  }
  ${min(1215)} {
    display: block;
  }
`;
export const AsideImg = styled.img`
  width: 100%;
  display: none;

  ${max(1215)} {
    display: block;
  }
  ${min(1215)} {
    display: none;
  }
`;
export const Wrapper = styled.div<{
  color: string;
}>`
  color: ${props => props.color};
  width: 70%;
  padding-bottom: 180px;

  ${max(1215)} {
    width: 100%;
    padding-bottom: 0;
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
`;
export const CollectionSection = styled.section`
  margin-top: 150px;

  &.mTop100 {
    margin-top: 100px;
  }
`;
export const CollectionSubTitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 8px;
`;
export const CollectionTitle = styled.h2<{
  highlight?: string;
}>`
  font-family: "AritaBuri";
  font-size: 4rem;
  font-weight: 400;
  word-break: keep-all;
  color: ${props => props.color};

  &.highlight {
    color: ${props => props.highlight};
    font-weight: 300;
  }

  ${max(768)} {
    font-size: 3.6rem;
  }
`;
export const CollectionContent = styled.p`
  line-height: 2.4rem;
  margin-top: 24px;
  word-break: keep-all;
`;
