import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 80px;
`;
export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;
export const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  & button:last-of-type {
    margin-left: 6px;
  }
`;
export const PointWrap = styled.div`
  padding: 40px;
  border-radius: 8px;
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
  font-size: 2.4rem;
  font-weight: 600;
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
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px;

  &:first-of-type {
    border-radius: 8px 8px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 8px 8px;
  }
  &:only-child {
    border-radius: 8px;
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
  font-size: 3rem;
  margin-top: 24px;
`;
export const Currency = styled.span`
  font-size: 3rem;
  margin-left: 6px;
`;
export const ListRight = styled.div``;
