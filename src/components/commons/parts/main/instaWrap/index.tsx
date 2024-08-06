import styled from "@emotion/styled";
import {
  MainContainer,
  MainSection,
  MainTitle
} from "../../../../units/main/style";
import { max } from "../../../../../commons/libraries/breakPoints";
import { useEffect } from "react";
import { useFetchInsta } from "../../../hooks/queries/fetchInsta";

export const InstaTitleWrap = styled.div`
  display: flex;
  align-items: flex-end;

  ${max(768)} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const InstaAnchor = styled.a`
  display: block;
  color: #666;
  font-size: 2rem;
  margin-left: 10px;
  padding-bottom: 6px;

  ${max(768)} {
    margin-left: 0;
    padding-bottom: 0;
    margin-top: 6px;
  }
`;
export const InstaWrap = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 12px;

  ${max(1015)} {
    gap: 8px;
  }
`;
export const InstaBox = styled.img`
  display: block;
  aspect-ratio: 1 / 1;
  width: 100%;
  background-color: #ccc;

  ${max(1015)} {
    &:last-of-type {
      display: none;
    }
  }
  ${max(768)} {
    &:nth-last-of-type(2) {
      display: none;
    }
  }
  ${max(650)} {
    &:nth-last-of-type(3) {
      display: none;
    }
  }
`;

export default function MainInstaWrap(props) {
  useEffect(() => {
    useFetchInsta();
  }, []);

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
        <InstaBox src="" />
        <InstaBox src="" />
        <InstaBox src="" />
        <InstaBox src="" />
        <InstaBox src="" />
        <InstaBox src="" />
      </InstaWrap>
    </MainSection>
  );
}
