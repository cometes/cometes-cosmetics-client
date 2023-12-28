import styled from "@emotion/styled";
import { MainSection } from "../../../../units/main/style";
import { max } from "../../../../../commons/libraries/breakPoints";

export const SloganWrap = styled.div`
  overflow: hidden;
`;
export const SloganBox = styled.div`
  display: flex;
  animation: slogan 30s linear infinite;

  @keyframes slogan {
    100% {
      transform: translateX(-2492px);
    }
  }
`;
export const Slogan = styled.img`
  display: block;

  ${max(768)} {
    height: 60px;
  }
`;

export default function MainSloganWrap() {
  return (
    <MainSection>
      <SloganWrap>
        <SloganBox>
          <Slogan src="https://storage.googleapis.com/cometes-storage/main/slogan2.webp" />
          <Slogan src="https://storage.googleapis.com/cometes-storage/main/slogan2.webp" />
        </SloganBox>
      </SloganWrap>
    </MainSection>
  );
}
