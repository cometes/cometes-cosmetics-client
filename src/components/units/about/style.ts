import styled from "@emotion/styled";
import { max } from "../../../commons/libraries/breakPoints";

export const AboutSection = styled.section`
  margin-top: 180px;
  &:first-of-type {
    margin-top: 0;
  }
`;
export const Title = styled.h2`
  color: #222;
  font-family: "AritaBuri", sans-serif;
  font-size: 6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 6rem;
  text-transform: uppercase;
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
export const SubTitle = styled.p`
  color: #222;
  font-family: "AritaBuri";
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 16px;

  ${max(768)} {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
`;
export const content = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-top: 30px;
  word-break: keep-all;

  ${max(768)} {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;
export const ImgWrap = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;

  ${max(768)} {
    gap: 8px;
    margin-top: 60px;
  }
  ${max(500)} {
    gap: 6px;
    margin-top: 40px;
  }
`;
export const ImgBox = styled.div`
  &.div1 {
    grid-area: 1 / 1 / 3 / 3;
  }
  &.div2 {
    grid-area: 1 / 3 / 2 / 6;
  }
  &.div3 {
    grid-area: 2 / 3 / 3 / 5;
  }
  &.div4 {
    grid-area: 2 / 5 / 3 / 6;
  }

  &.section {
    overflow: hidden;
    max-height: 400px;
    margin-top: 60px;
    
    ${max(768)} {
      margin-top: 40px;
    }
  }
`;
export const ContentImg = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 25%;
`;
