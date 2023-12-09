import styled from "@emotion/styled";
import { max, min } from "../../../../../commons/libraries/breakPoints";

export const FlexSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 140px;

  ${max(600)} {
    align-items: baseline;
  }
`;
export const LeftWrap = styled.div`
  position: relative;
  width: 25%;
  margin-right: 100px;
  margin-top: 160px;
  z-index: 10;
  margin-right: 14%;

  ${max(900)} {
    margin-right: 10%;
  }
  ${max(600)} {
    margin-right: 0;
    padding-bottom: 45%;
  }
`;
export const MiddleWrap = styled.div`
  position: relative;
  width: 50%;
`;
export const RightWrap = styled.div`
  width: 25%;
  position: relative;
  margin-left: 20%;

  ${max(900)} {
    margin-left: 10%;
  }
  ${max(600)} {
    margin-left: 0;
    padding-bottom: 5%;
  }
`;
export const MainImg = styled.img`
  display: block;
  aspect-ratio: 3 / 4;
  max-width: 100%;
`;
export const SquareImg = styled.img`
  display: block;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  min-width: 160px;

  &.idx1 {
    position: absolute;
    left: 100%;
    top: -20%;
  }
  &.idx3 {
    margin-bottom: 10px;
  }
  &.idx2 {
    position: absolute;
    left: -160%;
    bottom: -70%;
    z-index: 10;

    ${max(600)} {
      bottom: -45%;
    }
  }

  ${max(900)} {
    min-width: 120px;
  }
  ${max(600)} {
    min-width: 100px;
  }
`;
export const ItemWrap = styled.div<{
  background: string;
}>`
  max-width: 100%;
  aspect-ratio: 1 / 1;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.right {
    background: ${props => props.background};
    position: absolute;
    left: -100%;
    bottom: -50%;

    ${max(600)} {
      bottom: -30%;
    }
  }
  &.left {
    background: ${props => props.background};
    position: absolute;
    top: -80%;
    right: -30%;
    & a {
      text-align: left;
    }

    ${max(600)} {
      top: -30%;
    }
  }

  ${min(1920)} {
    padding: 30px;
  }
  ${max(768)} {
    padding: 12px;
  }
`;
export const ItemTitle = styled.p`
  text-transform: uppercase;
  word-break: keep-all;

  ${max(768)} {
    font-size: 1.4rem;
  }
`;
export const ItemTextButton = styled.a`
  text-decoration: underline;
  font-size: 1.4rem;
  color: #fff;
  display: block;
  text-align: right;
  cursor: pointer;

  ${max(768)} {
    font-size: 1.2rem;
  }
`;
