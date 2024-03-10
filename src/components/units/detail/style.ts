import styled from "@emotion/styled";
import { max } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  display: flex;

  ${max(1000)} {
    flex-direction: column;
  }
`;
export const LeftWrap = styled.div`
  width: 50%;

  ${max(1000)} {
    width: 100%;
    aspect-ratio: 4 / 3;
  }
`;
export const LeftAside = styled.aside`
  position: sticky;
  top: 80px;

  ${max(1000)} {
    position: relative;
    top: 0;
  }
`;
export const RightWrap = styled.div`
  width: 50%;

  ${max(1000)} {
    width: 100%;
  }
`;
export const RightBox = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  width: 100%;
  /* height: calc(100vh - 80px); */
  padding: 60px 70px;

  ${max(1015)} {
    height: auto;
    width: 100%;
    padding: 40px;
  }
  ${max(768)} {
    padding: 40px 24px;
  }
  ${max(500)} {
    padding: 40px 16px;
  }
`;
export const ContentBox = styled.div`
  padding: 20px 40px 0 40px;

  ${max(1015)} {
    padding: 20px 40px 0 40px;
  }
  ${max(768)} {
    padding: 24px;
  }
  ${max(500)} {
    padding: 16px;
  }
`;
export const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin-left: 20px;
  }
  & span:first-of-type {
    margin-left: 0;
  }

  ${max(1000)} {
    justify-content: flex-start;
  }
`;
export const CategoryTitle = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #222;
`;
export const CategoryIcon = styled.i`
  display: block;
  font-size: 1.6rem;
  height: 1.6rem;
  color: #6d6d6d;
`;
export const ProductSection = styled.section`
  margin-top: 40px;

  ${max(1000)} {
    margin-top: 24px;
  }
`;
export const ProductTitleWrap = styled.div`
  & h1:last-of-type {
    margin-top: 6px;
  }
`;
export const ProductTitle = styled.h1`
  font-size: 3rem;
  color: #222;
  font-weight: 500;
  text-transform: uppercase;

  ${max(1000)} {
    font-size: 2.4rem;
  }
`;
export const HeartBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeartIcon = styled.i`
  font-size: 3rem;
  line-height: 3rem;
  height: 3rem;
  display: block;
  color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #d86565;
  }
`;
export const ProductPriceWrap = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 40px;

  ${max(1000)} {
    margin-top: 24px;
  }
`;
export const ProductPrice = styled.p`
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 500;
  color: #222;
`;
export const ProductCurrency = styled.span`
  display: block;
  font-size: 2.4rem;
  line-height: 2.4rem;
  color: #222;
  margin-left: 4px;
`;
export const ProductTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 10px;
  margin-top: 24px;
`;
export const ProductTag = styled.div`
  display: block;
  border: 1px solid #ccc;
  background: none;
  color: #adadad;
  padding: 6px 16px;
  font-size: 1.6rem;
  line-height: 1.6rem;
  cursor: pointer;
  word-break: keep-all;

  ${max(768)} {
    font-size: 1.4rem;
  }
`;
export const ProductColorWrap = styled.div`
  margin-top: 40px;
`;
export const ColorCategoryWrap = styled.div`
  display: flex;
  align-items: center;

  &::before {
    display: block;
    content: "OPTION";
    color: #fff;
    background-color: #333;
    padding: 4px 8px;
    border-radius: 3px;
    font-weight: 500;
    margin-right: 16px;
  }
`;
export const ColorCategory = styled.span`
  display: block;
  color: #adadad;
  margin-left: 16px;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }

  &.active {
    color: #222;
    font-weight: 500;
  }
`;
export const ColorIconWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 16px;
`;
export const ColorIconBox = styled.div`
  position: relative;
  &.active {
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 1px solid #af3832;
    }
  }
`;
export const ColorIcon = styled.img<{
  code: string;
}>`
  display: block;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.code};
  cursor: pointer;

  .active & {
    border: 3px solid #fff;
  }
`;
export const CurrentColorWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
export const CurrentColorBox = styled.div`
  width: fit-content;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-radius: 20px;
`;
export const CurrentColorIcon = styled.span<{
  code?: string;
}>`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${props => props.code};
`;
export const CurrentColorText = styled.span<{
  code?: string;
}>`
  display: block;
  margin-left: 6px;
  color: ${props => props.code};
`;
export const CurrentColorDesc = styled.p`
  margin-left: 16px;
  font-size: 1.5rem;
  color: #333;
`;
export const ClearBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;
`;
export const ClearIcon = styled.i`
  display: block;
  font-size: 1.6rem;
  height: 1.6rem;
  color: #adadad;
`;
export const ClearText = styled.span`
  display: block;
  margin-left: 6px;
  color: #adadad;
`;
export const ProductContent = styled.p`
  color: #222;
  font-size: 1.6rem;
  line-height: 2.2rem;
  margin-top: 30px;

  ${max(1000)} {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;
export const ProductButtonWrap = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const ProductButtonBox = styled.div`
  &:last-of-type {
    margin-left: 10px;
  }
`;
export const DetailSection = styled.section``;
export const DetailTabWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #d9d9d9;
  background-color: rgba(255, 255, 255, 0.95);

  ${max(1000)} {
    position: sticky;
    top: 80px;
  }
`;
export const DetailTab = styled.div`
  width: calc(100% / 3);
  text-align: center;
  padding: 16px 0;
  color: #adadad;
  cursor: pointer;

  &.active {
    color: #222;
    font-weight: 500;
  }
`;
export const DetailContent = styled.img`
  display: block;
  width: 100%;
`;
