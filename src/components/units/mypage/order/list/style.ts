import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const ProductWrap = styled.div`
  margin-top: 40px;
`;
export const ProductTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductTitleBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const ProductDate = styled.p`
  font-size: 1.6rem;
  color: #424242;
`;
export const ProductTitle = styled.p`
  font-size: 1.4rem;
  color: #828c94;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 14px;
    background: #828c94;
    margin: 0 6px;
  }
`;
export const ProductDetail = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #424242;
`;
export const ProductDetailIcon = styled.i`
  display: block;
  font-size: 1.6rem;
  height: 1.6rem;
  color: #424242;
`;
export const ProductListWrap = styled.ul`
  border-radius: 6px;
  border: 1px solid #d7d7d7;
  margin-top: 10px;
`;
export const ProductList = styled.li`
  padding: 16px;
  border-bottom: 1px solid #d7d7d7;

  &:last-of-type {
    border-bottom: none;
  }
  &:only-of-type {
    border-bottom: none;
  }
`;
export const ListStatus = styled.p``;
export const ListWrap = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ListInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  background-color: #f7f7f7;
  border-radius: 6px;
  aspect-ratio: 1 / 1;
  cursor: pointer;
`;
export const ListInfoBox = styled.div`
  margin-left: 12px;
`;
export const ListButton = styled.div`
  min-width: 140px;
`;
export const ItemOption = styled.span`
  display: block;
  color: #555;
  font-size: 1.4rem;
  margin-top: 6px;
`;
