import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const LookBookTitle = styled.h2`
  font-size: 6rem;
  line-height: 5.5rem;
  font-weight: 300;

  ${max(768)} {
    font-size: 3.6rem;
    line-height: 3.4rem;
  }
`;
export const LookBookWrap = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const LookBookLeft = styled.div`
  width: 55%;
`;
export const LookBookRight = styled.div`
  width: 45%;
  padding-left: 30px;

  ${max(768)} {
    padding-left: 10px;
  }
`;
export const LookBookRightBox = styled.div`
  display: flex;
  width: fit-content;

  &.RB {
    margin-top: 60px;
  }
`;
export const LookBookImgBox = styled.div`
  position: relative;
  width: fit-content;

  &.LT {
    margin-top: 40px;
    margin-right: 40px;

    ${max(768)} {
      margin-right: 20px;
    }
  }
  &.RT {
    margin-left: 30px;
    ${max(768)} {
      margin-left: 10px;
    }
  }
  &.RB {
    margin-right: 30px;

    ${max(768)} {
      margin-right: 10px;
    }
  }
`;
export const LookBookImg = styled.img`
  position: relative;
  z-index: 12;
  display: block;
  max-width: 100%;
  aspect-ratio: 3 / 4;
`;
export const LookBookDeco = styled.div<{
  background: string;
}>`
  &::after {
    content: "";
    width: 30%;
    min-width: 80px;
    aspect-ratio: 1 / 1;
    background-color: ${props => props.background};
    display: block;
    position: absolute;
  }

  &.LB {
    &::after {
      top: -60px;
      left: -60px;
    }

    ${max(768)} {
      &::after {
        top: -40px;
        left: -30px;
      }
    }
  }
  &.RT {
    &::after {
      top: -40px;
      right: -40px;
    }

    ${max(768)} {
      &::after {
        top: -30px;
        right: -20px;
      }
    }
  }

  &.RB {
    &::after {
      bottom: -40px;
      right: -54px;
    }

    ${max(768)} {
      &::after {
        bottom: -40px;
        right: -40px;
      }
    }
  }
`;
export const LookBookTextBox = styled.div`
  position: relative;
  z-index: 11;
  margin-top: 45%;
  margin-left: 60px;
  margin-bottom: 16vmin;

  ${max(768)} {
    margin-left: 0;
  }
`;
export const LookBookSlogan = styled.p`
  position: relative;
  z-index: 10;
  font-size: 12rem;
  line-height: 10rem;
  font-family: "AritaBuri";
  color: #372654;
  font-weight: 300;
  letter-spacing: -0.36rem;

  &.btm {
    position: absolute;
  }

  ${max(1000)} {
    font-size: 12rem;
  }
  ${max(768)} {
    font-size: 10rem;
    line-height: 8rem;
  }
  ${max(630)} {
    font-size: 8rem;
    line-height: 8rem;
  }
`;
export const LookBookDecoText = styled.p`
  writing-mode: vertical-rl;
  font-size: 2.4rem;
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;

  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 100px;
    background: #000;
    margin-top: 10px;
  }

  ${max(768)} {
    font-size: 2rem;
    line-height: 2rem;

    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 80px;
      background: #000;
      margin-top: 10px;
    }
  }
  ${max(500)} {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;
