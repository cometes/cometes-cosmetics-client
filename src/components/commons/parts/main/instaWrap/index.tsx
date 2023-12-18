import styled from "@emotion/styled";
import {
  MainContainer,
  MainSection,
  MainTitle
} from "../../../../units/main/style";

export const InstaTitleWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const InstaAnchor = styled.a`
  display: block;
  color: #666;
  font-size: 2rem;
  margin-left: 10px;
  padding-bottom: 6px;
`;
export const InstaWrap = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
`;
export const InstaBox = styled.img`
  display: block;
  aspect-ratio: 1 / 1;
  width: 100%;
  background-color: #ccc;
`;

export default function MainInstaWrap() {
  return (
    <MainSection>
      <MainContainer>
        <InstaTitleWrap>
          <MainTitle>#MACCOSMETICS</MainTitle>
          <InstaAnchor
            href="https://www.instagram.com/maccosmeticskorea/"
            target="_blank"
          >
            @maccosmeticskorea
          </InstaAnchor>
        </InstaTitleWrap>
      </MainContainer>
      <InstaWrap>
        <InstaBox />
        <InstaBox />
        <InstaBox />
        <InstaBox />
        <InstaBox />
        <InstaBox />
      </InstaWrap>
    </MainSection>
  );
}
