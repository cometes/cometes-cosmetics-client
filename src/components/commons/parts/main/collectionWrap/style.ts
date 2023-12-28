import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const CollectionSection = styled.section`
  margin-top: 180px;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    left: 0px;
    top: 200px;
    width: calc(100vw - 8px);
    margin-left: calc(-50vw + 50%);
    height: 75%;
    background-color: #fafafa;
    content: "";
  }

  ${max(768)} {
    margin-top: 140px;
  }
`;
export const CollectionWrap = styled.div`
  position: relative;
  z-index: 10;

  &:not(:first-of-type) {
    margin-top: 200px;
  }

  ${max(768)} {
    &:not(:first-of-type) {
      margin-top: 120px;
    }
  }
`;
export const CollectionContainer = styled.div`
  width: 1440px;
  margin: 0 auto;

  ${max(1455)} {
    width: 100%;
  }
`;
export const CollectionBannerWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  ${max(768)} {
    flex-direction: column;
  }
`;
export const CollectionBanner = styled.div`
  position: relative;
  display: flex;

  &.left {
    margin-top: 100px;
  }
  &.right {
    margin-bottom: 100px;
  }

  ${max(1215)} {
    &.left {
      margin-top: 7vw;
    }
    &.right {
      margin-bottom: 7vw;
    }
  }
  ${max(768)} {
    &.left {
      margin-top: 11vw;
      justify-content: flex-start;
    }
    &.right {
      margin-bottom: 11vw;
      justify-content: flex-end;
    }
  }
`;
export const CollectionBannerImg = styled.img`
  display: block;
  max-width: 1200px;
  max-height: 480px;
  object-fit: cover;
  width: 100%;

  &.first {
    max-width: 1100px;
  }
  &.vertical {
    max-width: 560px;
    max-height: 100%;
    aspect-ratio: 3 / 4;

    ${max(768)} {
      width: 70%;
      aspect-ratio: 1 / 1;
    }
    ${max(500)} {
      width: 80%;
    }
  }
`;
export const CollectionDeco = styled.span`
  display: block;
  font-size: 15rem;
  font-family: "AritaBuri", sans-serif;
  letter-spacing: -1rem;
  text-transform: uppercase;
  font-weight: 300;
  position: absolute;
  z-index: 20;
  color: ${props => props.color};

  &.left {
    top: 0;
    left: -3%;
  }
  &.right {
    bottom: 0;
    right: -5%;
  }

  ${max(1215)} {
    font-size: 12vw;
  }
  ${max(768)} {
    font-size: 16vw;
  }
  ${max(500)} {
    font-size: 18vw;
  }
`;
export const CollectionTextWrap = styled.div`
  &.vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const CollectionTitle = styled.h3`
  font-family: "AritaBuri", sans-serif;
  font-size: 6rem;
  line-height: 6rem;
  font-weight: 500;
  margin-top: 50px;

  .vertical & {
    text-align: end;
  }

  ${max(1215)} {
    margin-top: 4vw;
  }
  ${max(1015)} {
    font-size: 5rem;
    line-height: 5rem;
  }
  ${max(768)} {
    margin-top: 30px;
  }
  ${max(500)} {
    font-size: 3.6rem;
    line-height: 3.6rem;
  }
`;
export const CollectionContent = styled.p`
  margin-top: 10px;
  font-size: 1.8rem;
  line-height: 2.4rem;
  word-break: keep-all;
  color: #222;

  .vertical & {
    text-align: end;
  }

  ${max(1015)} {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`;
