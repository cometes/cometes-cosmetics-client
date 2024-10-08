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
export const ListContainer = styled.section`
  min-height: 200px;
`
export const ListWrap = styled.ul`
  margin-top: 16px;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
`;
export const ListBox = styled.li`
  border-bottom: 1px solid #d7d7d7;
  display: flex;
  justify-content: space-between;

  &:last-of-type {
    border-bottom: none;
  }
  &:only-of-type {
    border-bottom: none;
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
    font-size: 2.4rem;
  }

  ${max(768)} {
    font-size: 1.8rem;

    &.plus {
      font-size: 2rem;
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
export const EmptyText = styled.p`
  text-align: center;
  padding: 50px 0;
`
