import styled from "@emotion/styled";

export const ReviewSection = styled.section``;
export const ReviewTitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 6rem;
  font-weight: 500;
  text-align: center;
`;
export const RateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const RateBox = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #d9d9d9;
  padding-left: 16px;
  margin-left: 16px;
`;
export const Rate = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
`;
export const RateText = styled.span`
  display: block;
  color: #a4a4a4;
  margin-left: 6px;
`;
export const ReviewWriteBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const ReviewTop = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
`;

export const ReviewInputBox = styled.div`
  padding: 8px;
  background-color: #f9f9f9;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
export const ReviewInput = styled.input`
  font-size: 1.4rem;
  border: none;
  outline: none;
  color: #222;
  background: transparent;
  padding: 0 6px;
  &::placeholder {
    color: #666;
  }
`;
export const ReviewInputIcon = styled.i`
  font-size: 1.6rem;
  height: 1.6rem;
  color: #666;
  display: block;
  cursor: pointer;
`;
export const ReviewBox = styled.ul``;
export const ReviewList = styled.li`
  padding: 30px 0;
  border-bottom: 1px solid #d9d9d9;
`;
export const ReviewTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const ReviewTd = styled.td`
  border-bottom: 1px solid #f1f1f1;
  text-align: end;
`;
export const ReviewItemImg = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  background-color: #ccc;
  margin-right: 24px;
`;
export const ReviewItemTop = styled.div``;
export const ReviewInfoWrap = styled.div`
  display: flex;

  &:last-of-type {
    margin-top: 20px;
  }
`;
export const ReviewInfoBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  margin-left: 12px;
  border-left: 1px solid #d9d9d9;
`;
export const ReviewInfoText = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #222;
`;
export const ReviewInfoColor = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #d36580;
  margin-left: 6px;
`;
export const ReviewInfoTagWrap = styled.div`
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-left: 16px;
  }
`;
export const ReviewInfoTagBox = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #fd443f;
  padding: 2px;
  border: 1px solid #fd443f;
`;
export const ReviewInfoTagText = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #222;
  margin-left: 6px;
`;
export const ReviewWriter = styled.p`
  color: #111;
  font-size: 1.4rem;
`;
export const ReviewDate = styled.p`
  font-size: 1.4rem;
  color: #a3a3a3;
`;
export const ReviewItemBtm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 10px;
`;
export const ReviewContent = styled.p`
  font-size: 1.4rem;
  color: #222;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 80%;
`;
export const ReviewTextBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const ReviewTextBtnIcon = styled.i`
  display: block;
  font-size: 1.6rem;
  height: 1.6rem;
  margin-left: 6px;
`;
