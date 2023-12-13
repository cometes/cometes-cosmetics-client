import styled from "@emotion/styled";

export const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  & button:last-of-type {
    margin-left: 6px;
  }
`;
export const PointWrap = styled.div`
  padding: 30px;
  border-radius: 6px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PointText = styled.p`
  font-size: 2rem;
`;
export const PointAmount = styled.p`
  margin-top: 16px;
  font-size: 3rem;
  font-weight: 500;
`;
export const PointMark = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  margin-left: 6px;
`;
export const ListWrap = styled.ul`
  margin-top: 30px;
`;
export const ListBox = styled.li`
  border: 1px solid #d7d7d7;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px;

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
`;
export const ListLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const Date = styled.p`
  color: #c2c9d0;
  margin-right: 30px;
`;
export const Payment = styled.p`
`;
export const Amount = styled.p`
  font-size: 2.4rem;
  margin-top: 20px;
`;
export const Currency = styled.span`
  font-size: 2.4rem;
  margin-left: 6px;
`;
export const ListRight = styled.div``;
