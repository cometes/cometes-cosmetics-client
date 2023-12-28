import styled from "@emotion/styled";
import { max } from "../../../../commons/libraries/breakPoints";

export const TabWrap = styled.div`
  display: flex;
  margin-top: 40px;
  & button {
    margin-left: 6px;
  }
  & button:first-of-type {
    margin-left: 0;
  }
`;
export const PointWrap = styled.div`
  padding: 30px;
  min-height: 140px;
  border-radius: 6px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PointText = styled.p`
  color: #333;
`;
export const PointAmount = styled.p`
  font-size: 3rem;
  font-weight: 500;
  margin-top: 10px;
`;
export const PointMark = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  margin-left: 6px;
`;
export const ListWrap = styled.ul`
  margin-top: 16px;
`;
export const ListBox = styled.li`
  border: 1px solid #d7d7d7;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: space-between;

  &:first-of-type {
    border-radius: 6px 6px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 6px 6px;
  }
  &:only-of-type {
    border-radius: 6px;
  }
  &:not(:first-of-type) {
    margin-top: -1px;
  }

  ${max(768)} {
    padding: 20px;
  }
`;
export const ListLeft = styled.div`
  display: flex;
  align-items: center;
  width: 70%;

  ${max(768)} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ListRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;
export const ItemBox = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  &.order {
    width: 70%;
  }

  ${max(768)} {
    padding: 0;

    &.order {
      width: 100%;
    }
  }
`;
export const Date = styled.p`
  color: #c2c9d0;

  ${max(768)} {
    font-size: 1.4rem;
    margin-bottom: 6px;
  }
`;
export const Payment = styled.span`
  color: #828c94;
  font-weight: 500;
  display: block;
`;
export const Order = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #222;
  margin-top: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.plus {
    font-size: 3rem;
  }

  ${max(768)} {
    font-size: 1.8rem;

    &.plus {
      font-size: 2.4rem;
    }
  }
`;
export const Amount = styled.p`
  font-size: 3rem;

  &.minus {
    color: #ff7777;
  }
  &.plus {
    color: #35c5f0;
  }

  ${max(768)} {
    font-size: 2.4rem;
  }
`;
export const Currency = styled.span`
  font-size: 3rem;
  margin-left: 6px;

  ${max(768)} {
    font-size: 2.4rem;
  }
`;
