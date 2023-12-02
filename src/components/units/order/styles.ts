import styled from "@emotion/styled";

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Article = styled.article`
  width: calc(100% - 360px);
`;
export const Aside = styled.aside`
  width: 360px;
  padding-left: 30px;
  position: relative;

  &.sticky section {
    position: sticky;
    top: 100px;
  }
`;
export const ContentWrap = styled.div`
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #d7d7d7;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
