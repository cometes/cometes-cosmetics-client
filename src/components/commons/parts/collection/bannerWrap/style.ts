import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const FullImgBox = styled.div`
  margin-top: 60px;
  position: relative;
`;
export const FullImg = styled.img`
  display: block;
  width: 100%;
`;
export const ImgDescWrap = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 100%;

  ${max(768)} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const ImgDescBox = styled.div`
  display: flex;

  &:nth-of-type(1) {
    width: 30%;
    padding: 0 0 8% 50px;
    align-items: flex-end;
  }
  &:nth-of-type(2) {
    width: 24%;
    padding: 5% 20px 0;
  }
  &:nth-of-type(3) {
    width: 20%;
    padding-top: 9%;
  }
  &:nth-of-type(4) {
    width: 26%;
    align-items: flex-end;
    padding: 0 80px 6% 0;
  }

  ${max(768)} {
    width: 100%;

    &:nth-of-type(1) {
      width: 100%;
      padding: 0 0 40% 20%;
    }
    &:nth-of-type(2) {
      width: 100%;
      padding: 16%;
    }
    &:nth-of-type(3) {
      width: 100%;
      padding: 30% 10% 0 10%;
    }
    &:nth-of-type(4) {
      width: 100%;
      padding: 0 30% 24% 0;
    }
  }
`;
export const ImgDesc = styled.p`
  font-family: "AritaBuri";
  color: #f0c771;
  word-break: keep-all;
  line-height: 2rem;
  text-align: center;
`;
