import styled from "@emotion/styled";

export const OrderInfoWrap = styled.div`
  background-color: #f7f7f7;
  border-radius: 6px;
  padding: 20px;
  display: flex;
`;
export const OrderInfoBox = styled.div`
  font-size: 1.4rem;
  display: flex;
  &:last-of-type {
    margin-left: 30px;
  }
`;
export const OrderInfoCategory = styled.span`
  color: #666;
`;
export const OrderInfoText = styled.p`
  margin-left: 8px;
`;
export const JustifyBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  &:first-of-type {
    margin-top: 0;
  }
`;
export const ProductBox = styled.div`
  padding: 20px;
`;
export const FlexBox = styled.div`
  display: flex;
  margin-top: 30px;
  &:first-of-type {
    margin-top: 0;
  }
`;
export const ProductDesc = styled.span`
  display: block;
  width: 100px;
  color: #8f8f8f;
`;
export const ProductStrong = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;
export const ListButtonWrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
export const ListButtonBox = styled.div`
  width: 120px;
`;
