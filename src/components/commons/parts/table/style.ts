import styled from "@emotion/styled";

export const SectionWrap = styled.section`
  margin-top: 40px;
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

  &.column {
    flex-direction: column;
    align-items: center;
  }
`;
export const ItemTextButton = styled.p`
  font-size: 1.4rem;
  color: #bbb;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 4px;
`;
export const ItemInfoWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &.checkbox {
    margin-left: 20px;
  }
`;
export const ItemInfoBox = styled.div`
  margin-left: 12px;
`;
export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  background-color: #ccc;
  border-radius: 6px;
`;
export const ItemOption = styled.span`
  display: inline-block;
  color: #555;
  font-size: 1.4rem;
  margin-top: 24px;
`;
export const ItemOptionButton = styled.span`
  font-size: 1.2rem;
  margin-left: 10px;
  text-decoration: underline;
`;
export const ItemStrongText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;
export const ItemSubText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 8px;
`;
export const ItemStatus = styled.p`
  font-weight: 500;
`;
export const ItemButtonBox = styled.div`
  width: 80px;

  & button:last-of-type {
    margin-top: 8px;
  }
`;
export const ItemPrice = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 4px;
`;
// export const AlignBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// export const JustifyBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 30px;

//   &:first-of-type {
//     margin-top: 0;
//   }
// `;
// export const ProductBox = styled.div`
//   padding: 20px;
// `;
// export const FlexBox = styled.div`
//   display: flex;
//   margin-top: 30px;
//   &:first-of-type {
//     margin-top: 0;
//   }
// `;
// export const ProductDesc = styled.span`
//   display: block;
//   width: 100px;
//   color: #8f8f8f;
// `;
// export const ProductStrong = styled.p`
//   font-size: 2rem;
//   font-weight: 500;
// `;
