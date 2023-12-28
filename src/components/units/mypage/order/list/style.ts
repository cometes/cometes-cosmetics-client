import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const ProductWrap = styled.div`
  margin-top: 40px;
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

  &:nth-of-type(2) {
    width: 40%;

    ${max(768)} {
      width: 100%;
    }
  }
  &:not(:nth-of-type(2)) {
    width: 15%;

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
  min-width: fit-content;
  &:nth-of-type(2) {
    width: 40%;

    ${max(768)} {
      width: 100%;
    }
  }
  &:not(:nth-of-type(2)) {
    width: 15%;

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
    padding: 14px;
  }
  ${max(768)} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 14px 14px 14px;

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
  background-color: #ccc;
  border-radius: 6px;
  aspect-ratio: 1 / 1;
`;
export const ItemOption = styled.span`
  display: inline-block;
  color: #555;
  font-size: 1.4rem;
`;
export const ItemOptionBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${max(768)} {
    flex-direction: row;
    align-items: center;

    .date & {
      margin-left: 10px;
    }
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
