import styled from "@emotion/styled";

export const ProductInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  cursor: pointer;
  border-bottom: 2px solid #efefef;
`;
export const ProductInfoTitle = styled.p`
  font-size: 1.8rem;
  color: #333;
`;
export const ProductInfoSub = styled.p`
  color: #333;
`;
export const ProductInfoIcon = styled.i`
  color: #333;
  font-size: 2.4rem;
`;
export const ProductInfoBox = styled.div`
  width: 100%;
  background-color: #fafafa;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &.active {
    max-height: 1000px;
  }
`;
export const ProductInfoContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
`;
export const ProductInfoFlexBox = styled.div`
  display: flex;
  margin-top: 36px;

  &:first-of-type {
    margin-top: 0;
  }
`;
export const ProductInfoCategory = styled.span`
  display: block;
  color: #666;
  width: 30%;
`;
export const ProductInfoContent = styled.p`
  color: #666;
  width: 70%;
`;
