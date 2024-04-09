import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { max } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  margin-bottom: 180px;
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
`;
export const CategoryTitle = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #6d6d6d;

  &.current {
    font-weight: 600;
    color: #222;
  }
`;
export const CategoryIcon = styled.i`
  display: block;
  font-size: 1.6rem;
  height: 1.6rem;
  color: #6d6d6d;
`;
export const SelectBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemBox = styled.div`
  display: flex;
  padding: 20px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.info {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  ${max(1000)} {
    padding: 14px;
  }
  ${max(768)} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 14px 14px 44px;

    &.info {
      padding: 14px;
    }
    &.status {
      align-items: flex-start;
    }
    &.pTop {
      padding-top: 14px;
    }
    &.bgCell {
      background-color: #f6f7f8;
      border-radius: 6px;
      padding: 14px;
      margin: 0 14px 0 44px;
    }
  }
`;
export const ItemInfoWrap = styled.div`
  display: flex;
  align-items: center;

  &.checkbox {
    margin-left: 20px;

    ${max(1000)} {
      margin-left: 14px;
    }
  }
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
  cursor: pointer;
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
export const ItemOptionButton = styled.span`
  font-size: 1.2rem;
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;

  ${max(1000)} {
    margin-left: 0;
    margin-top: 4px;
  }

  ${max(768)} {
    margin-left: 10px;
    margin-top: 0;
  }
`;
export const ItemStrongText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;
export const ItemSubText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #777;
  margin-bottom: 8px;

  ${max(768)} {
    margin-bottom: 0;
  }
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
export const ItemTotalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;

  ${max(700)} {
    flex-direction: column;
    padding: 16px;
  }
`;
export const ItemTotalBox = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.divide {
    border-left: 1px solid #ebebeb;
  }
  &.vertical {
    flex-direction: row;
  }

  ${max(700)} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 0 18px 0;

    &.divide {
      border-left: none;
    }
  }
`;
export const ItemTotalText = styled.p`
  margin-top: 6px;

  ${max(700)} {
    margin-top: 0;
  }
`;
export const ItemTotalPlus = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #c7c7c7;

  ${max(700)} {
    display: none;
  }
`;
export const ItemTotalPrice = styled.p`
  font-size: 1.8rem;
  margin-left: 10px;
  font-weight: 500;
`;
export const ItemTotalButton = styled.div`
  width: 180px;

  ${max(700)} {
    width: 100%;
  }
`;

export const ProductWrap = styled.div`
  border-radius: 6px;
  border: 1px solid #d7d7d7;
  overflow: hidden;
`;
export const TableWrap = styled.div``;
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
    width: calc(55% / 4);

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
    width: calc(55% / 4);

    ${max(768)} {
      width: 100%;
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

export const FullWrapper = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`;
export const FullInfoTitle = styled.p`
  font-size: 2rem;
  text-align: center;
`;
export const FullInfoDesc = styled.p`
  color: #888;
  text-align: center;
  font-size: 1.4rem;
  margin: 10px 0 30px 0;
`;
