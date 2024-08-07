import styled from "@emotion/styled";
import { max, min } from "../../../commons/libraries/breakPoints";

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const SectionWrap = styled.section`
  margin-top: 40px;

  &:first-of-type {
    margin-top: 0;
  }

  ${min(1000)} {
    &.full {
      display: block;
    }
    &.w1000 {
      display: none;
    }
  }
  ${max(1000)} {
    &.full {
      display: none;
    }
    &.w1000 {
      display: block;
      margin-top: 80px;
    }
  }
`;
export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;

  ${max(1000)} {
    flex-direction: column;
  }
`;
export const Article = styled.article`
  width: calc(100% - 360px);

  ${max(1000)} {
    width: 100%;
  }
`;
export const Aside = styled.aside`
  width: 360px;
  padding-left: 30px;
  position: relative;

  &.sticky section {
    position: sticky;
    top: 100px;
  }

  ${max(1000)} {
    width: 100%;
    padding-left: 0;
    margin-top: 40px;
  }
`;
export const ContentWrap = styled.div`
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #d7d7d7;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${max(768)} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ContentSubText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const ContentSubTextGrey = styled.p`
  font-size: 1.4rem;
  color: #999;
  margin-bottom: 10px;
`;
export const SubmitButtonWrap = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${min(1000)} {
    &.full {
      display: flex;
    }
    &.w1000 {
      display: none;
    }
  }
  ${max(1000)} {
    &.full {
      display: none;
    }
    &.w1000 {
      display: flex;
    }
  }
`;
export const SubmitButtonBox = styled.div`
  width: 360px;
  margin-top: 16px;
`;
export const AsideWrap = styled.div`
  padding: 24px;
  border: 2px solid #111;
`;
export const AsideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  &:first-of-type {
    margin-top: 0;
  }
  &.strong {
    margin-top: 30px;
  }
`;
export const AsideTitle = styled.p`
  color: #424242;

  .strong & {
    color: #111;
    font-weight: 500;
  }
`;
export const AsideText = styled.p`
  font-weight: 500;

  .strong & {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;
export const AsidePrice = styled.div``;
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
export const CompleteWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CompleteMessage = styled.h2`
  font-size: 3.2rem;
  font-weight: 500;
`;
export const CompleteNumberBox = styled.div`
  padding: 12px 20px;
  border-radius: 30px;
  background-color: #555;
  margin-top: 20px;
`;
export const CompleteNumber = styled.p`
  color: #fff;
`;
export const ProductWrap = styled.div``;
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
    width: 50%;

    ${max(768)} {
      width: 100%;
    }
  }
  &:not(:first-of-type) {
    width: 25%;

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
    width: 50%;

    ${max(768)} {
      width: 100%;
    }
  }
  &:not(:first-of-type) {
    width: 25%;

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
export const ItemName = styled.p`
  cursor: pointer;
  word-break: keep-all;
  ${max(1000)} {
    font-size: 1.5rem;
  }
  ${max(768)} {
    font-size: 1.6rem;
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
  align-items: flex-start;
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
  width: 100px;

  & button:last-of-type {
    margin-top: 6px;
  }

  ${max(768)} {
    width: 100%;
    margin-top: 16px;
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
export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
  gap: 80px 10px;
  margin-top: 40px;

  ${max(506)} {
    grid-template-columns: 1fr 1fr;
    gap: 80px 8px;
  }
  ${max(1015)} {
    & > div:last-of-type {
      display: none;
    }
  }
  ${max(538)} {
    & > div:last-of-type {
      display: block;
    }
  }
`;
