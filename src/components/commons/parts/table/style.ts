import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { max } from "../../../../commons/libraries/breakPoints";

export const SectionWrap = styled.section`
  margin-top: 40px;

  &.mTop50 {
    margin-top: 50px;
  }
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const ProductWrap = styled.div`
  border-radius: 6px;
  border: 1px solid #d7d7d7;
  overflow: hidden;
`;
export const TableWrap = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const TableTab = styled.th`
  height: 40px;
  border-bottom: 1px solid #d7d7d7;
  background: #fafafa;
  font-weight: 500;
  color: #666;
`;
export const TableBody = styled.tbody`
  border-bottom: 1px solid #ebebeb;
`;
export const TableRow = styled.tr`
  &:last-of-type > td > div {
    padding-top: 0;
  }
  &:only-of-type > td > div {
    padding: 20px;
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
    &.column {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 14px 14px 44px;
    }
    &.order {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 14px 14px 14px;
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
      margin: 0 14px;
    }
    &.info {
      padding-top: 0;
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
export const ItemPrice = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 4px;
`;
export const MoreButtonBox = styled.div<{
  active?: boolean;
}>`
  display: ${props => (props.active ? "flex" : "none")};
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const MoreButtonText = styled.span`
  display: block;
  color: #6d6d6d;
`;
export const MoreButtonIcon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  color: #6d6d6d;
  margin-left: 4px;
`;
