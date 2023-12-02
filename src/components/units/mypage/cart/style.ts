import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SelectBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemTotalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
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
`;
export const ItemTotalText = styled.p`
  margin-top: 6px;
`;
export const ItemTotalPlus = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #c7c7c7;
`;
export const ItemTotalPrice = styled.p`
  font-size: 1.8rem;
  margin-left: 10px;
  font-weight: 500;
`;
export const ItemTotalButton = styled.div`
  width: 180px;
`;
