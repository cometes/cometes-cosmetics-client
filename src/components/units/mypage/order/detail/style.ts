import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

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
  width: 100px;
`;

export const ProductWrap = styled.div`
  border-radius: 6px;
  border: 1px solid #d7d7d7;
`;
export const TableWrap = styled.div`
  border-radius: 6px;
  border: 1px solid #d7d7d7;
  overflow: hidden;
`;
export const TabWrap = styled.div`
  height: 40px;
  border-bottom: 1px solid #d7d7d7;
  background: #fafafa;
  display: flex;
  align-items: center;
`;
export const Tab = styled.span`
  display: block;
  font-weight: 500;
  color: #666;
  text-align: center;

  &:first-of-type {
    width: 45%;

    ${max(768)} {
      width: 100%;
    }
  }
  &:not(:first-of-type) {
    width: calc(55% / 3);

    ${max(768)} {
      display: none;
    }
  }
`;
export const RowWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #ebebeb;

  &:last-of-type {
    border-bottom: none;
  }
  &:only-of-type {
    border-bottom: none;
  }

  ${max(768)} {
    flex-direction: column;
  }
`;
export const RowBox = styled.div`
  &:first-of-type {
    width: 45%;

    ${max(768)} {
      width: 100%;
    }
  }
  &:not(:first-of-type) {
    width: calc(55% / 3);

    ${max(768)} {
      width: 100%;
    }
  }
`;
export const ItemBox = styled.div`
  display: flex;
  padding: 20px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.info {
    align-items: flex-start;
  }

  ${max(1000)} {
    padding: 14px 16px;
  }
  ${max(768)} {
    flex-direction: row;
    justify-content: space-between;
    padding: 14px;

    &.status {
      flex-direction: column;
      align-items: flex-start;
    }
    &.pTop {
      padding-top: 14px;
    }
    &.bgCell {
      background-color: #f6f7f8;
      border-radius: 6px;
      padding: 14px;
      margin: 0 14px;
    }
    &.date {
      justify-content: flex-start;
    }
  }
`;
export const ItemTextButton = styled.p`
  font-size: 1.4rem;
  color: #bbb;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 4px;

  ${max(768)} {
    margin-top: 0;
    margin-left: 10px;
  }
`;
export const ItemInfoWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &.checkbox {
    margin-left: 20px;

    ${max(1000)} {
      margin-left: 14px;
    }
  }
`;
export const ItemInfoBox = styled.div`
  margin-left: 12px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  background-color: #f7f7f7;
  border-radius: 6px;
  aspect-ratio: 1 / 1;
`;
export const ItemName = styled.p`
  cursor: pointer;
  word-break: keep-all;
  ${max(1000)} {
    font-size: 1.4rem;
  }
  ${max(768)} {
    font-size: 1.6rem;
  }
`;
export const ItemOption = styled.span`
  display: inline-block;
  color: #555;
  font-size: 1.4rem;

  ${max(1000)} {
    font-size: 1.2rem;
  }
  ${max(768)} {
    font-size: 1.4rem;
  }
`;
export const ItemOptionBox = styled.div`
  display: flex;
  align-items: center;

  ${max(1000)} {
    flex-direction: column;
    align-items: flex-start;
  }
  ${max(768)} {
    flex-direction: row;
    align-items: center;
  }
`;
export const ItemStrongText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;
export const ItemStatus = styled.p`
  font-weight: 500;
`;
export const ItemButtonBox = styled.div`
  width: 80px;

  & button:last-of-type {
    margin-top: 6px;
  }

  ${max(768)} {
    width: calc(50% - 3px);
    & button:last-of-type {
      margin-top: 0;
    }
  }
`;
export const MobileCategory = styled.span`
  display: none;
  font-size: 1.6rem;
  color: #222;

  ${max(768)} {
    display: block;
  }
`;
export const ButtonFlex = styled.div`
  ${max(768)} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
`;
export const OptionBtn = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  background-color: #111;

  &.line {
    border: 2px solid #efefef;
    color: #949494;
    background: transparent;
  }

  ${max(768)} {
    height: 36px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const SectionWrap = styled.section`
  margin-top: 40px;
`;
