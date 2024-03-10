import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const ReviewSection = styled.section``;
export const ReviewTitle = styled.h2`
  font-family: "RaleWay", sans-serif;
  font-size: 6rem;
  line-height: 6rem;
  font-weight: 400;
  letter-spacing: -0.2rem;
  text-align: center;

  ${max(1015)} {
    font-size: 5rem;
    line-height: 5rem;
  }
  ${max(500)} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;
export const RateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  ${max(1015)} {
    margin-top: 30px;
  }
`;
export const RateBox = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #d9d9d9;
  padding-left: 16px;
  margin-left: 16px;
`;
export const Rate = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
`;
export const RateText = styled.span`
  display: block;
  color: #a4a4a4;
  margin-left: 6px;
`;
export const ReviewWriteBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  ${max(1015)} {
    margin-top: 30px;
  }
`;
export const ReviewTop = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
`;
export const ReviewInputBox = styled.div`
  padding: 8px;
  background-color: #f9f9f9;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
export const ReviewInput = styled.input`
  font-size: 1.4rem;
  border: none;
  outline: none;
  color: #222;
  background: transparent;
  padding: 0 6px;
  &::placeholder {
    color: #666;
  }
`;
export const ReviewInputIcon = styled.i`
  font-size: 1.6rem;
  height: 1.6rem;
  color: #666;
  display: block;
  cursor: pointer;
`;
export const ReviewListWrap = styled.ul`
  width: 100%;
`;
export const ReviewList = styled.li`
  padding: 30px 0;
  border-bottom: 1px solid #d9d9d9;

  ${max(768)} {
    padding: 24px 0;
  }
  ${max(570)} {
    padding: 16px 0;
  }
`;
export const ReviewWrap = styled.div``;
export const ReviewFlexWrap = styled.div`
  display: flex;

  ${max(700)} {
    flex-direction: column;
  }
`;
export const RightWrap = styled.div`
  width: calc(100% - 120px);
  padding-left: 24px;
  display: flex;
  flex-direction: column;

  ${max(768)} {
    width: calc(100% - 100px);
  }
  ${max(700)} {
    width: 100%;
    padding-left: 0;
    padding-top: 8px;
  }
`;
export const ReviewItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.content {
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid #ebebeb;
  }
  &.tags {
    margin-top: 16px;

    ${max(700)} {
      margin-top: 8px;
    }
  }
  &.rate {
    ${max(700)} {
      flex-wrap: wrap;
      gap: 8px 10px;
    }
    ${max(570)} {
      justify-content: flex-start;
    }
  }

  &.active {
    flex-direction: column;
    align-items: flex-start;
  }
  &.active div {
    width: 100%;
  }
`;
export const ReviewItemBox = styled.div`
  display: flex;
  flex-direction: column;

  &:first-of-type {
    width: 70%;
  }
  &:nth-of-type(2) {
    width: 15%;

    ${max(700)} {
      width: fit-content;
    }
  }
  &:last-of-type {
    width: fit-content;
    align-items: flex-end;
  }

  &.active {
    padding: 16px;
    background-color: #f8f8f8;
    margin-bottom: 10px;
  }

  ${max(570)} {
    .rate &:first-of-type {
      width: 100%;
    }
  }
`;
export const ReviewItemImg = styled.div`
  display: block;
  width: 120px;
  aspect-ratio: 1 / 1;
  background-color: #ccc;
  border-radius: 6px;
  overflow: hidden;

  ${max(768)} {
    width: 100px;
  }
`;
export const ReviewInfoWrap = styled.div`
  display: flex;
  gap: 0 16px;
`;
export const ReviewInfoBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ReviewInfoText = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #222;
  word-break: keep-all;
`;
export const ReviewInfoColor = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #d36580;
  margin-left: 6px;
`;
export const ReviewInfoTagWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const ReviewInfoTagBox = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #fd443f;
  padding: 2px;
  border: 1px solid #fd443f;
`;
export const ReviewInfoTagText = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #222;
  margin-left: 6px;
`;
export const ReviewWriter = styled.p`
  color: #111;
  font-size: 1.4rem;
`;
export const ReviewDate = styled.p`
  font-size: 1.4rem;
  color: #a3a3a3;
`;
export const ReviewContent = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #222;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;

  &.active {
    white-space: wrap;
  }
`;
export const ReviewTextBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #666;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const ReviewTextBtnIcon = styled.i`
  display: block;
  font-size: 1.6rem;
  height: 1.6rem;
  margin-left: 6px;
`;
