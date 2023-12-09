import styled from "@emotion/styled";

export const AboutSection = styled.section`
  margin-top: 180px;
  &:first-of-type {
    margin-top: 0;
  }
`;
export const Title = styled.h2`
  color: #222;
  font-family: "AritaBuri";
  font-size: 6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 6rem; /* 100% */
  text-transform: uppercase;
`;
export const SubTitle = styled.p`
  color: #222;
  font-family: "AritaBuri";
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 16px;
`;
export const content = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-top: 30px;
`;
export const ImgWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 80px;

  &.row {
    flex-direction: row;
    margin-top: 0;
  }
  &.col {
    flex-direction: column;
    margin-top: 0;
  }
`;
export const ImgBox = styled.div``;
export const ContentImg = styled.img`
  display: block;
  max-width: 100%;
`;
