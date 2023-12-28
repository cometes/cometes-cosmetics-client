import styled from "@emotion/styled";
import { useState } from "react";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import {
  MainContainer,
  MainSection,
  MainTitle
} from "../../../../units/main/style";
import { max } from "../../../../../commons/libraries/breakPoints";

export const MoreWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40px;

  ${max(650)} {
    flex-direction: column;
  }
`;
export const MoreBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 25%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &.active {
    width: 50%;
  }

  ${max(650)} {
    transition: none;
    width: 100%;

    &.active {
      width: 100%;
    }
  }
`;
export const MoreImg = styled.div<{
  bg: string;
}>`
  display: block;
  width: 100%;
  height: 480px;
  background: ${props => `#a8a8a8 url(${props.bg}) no-repeat 50% 0% / cover;`};
  background-blend-mode: multiply;

  ${max(768)} {
    height: 360px;
  }
`;
export const MoreTextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MoreCategory = styled.h3`
  font-size: 5rem;
  line-height: 5rem;
  font-weight: 400;
  color: #fff;
  display: inline-block;
  border-bottom: 3px solid #fff;

  ${max(768)} {
    font-size: 4rem;
    line-height: 4rem;
  }
`;
export const MoreContent = styled.p`
  position: absolute;
  width: 500px;
  top: 100%;
  color: #fff;
  text-align: center;
  line-height: 2.2rem;
  margin-top: 20px;
  opacity: 0;

  .active & {
    animation: moreAppear 0.5s ease-in-out 0.5s forwards;
  }

  @keyframes moreAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function MainMoreWrap() {
  const [moreMenu, SetMoreMenu] = useState("lip");
  const { onClickMoveToPage } = useMoveToPage();

  const onMouseEnterMore = (value: string) => () => {
    SetMoreMenu(value);
  };

  return (
    <MainSection>
      <MainContainer>
        <MainTitle>DISCOVER EVEN MORE</MainTitle>
        <MoreWrap>
          <MoreBox
            className={moreMenu === "lip" ? "active" : ""}
            onMouseEnter={onMouseEnterMore("lip")}
            onClick={onClickMoveToPage("/products/lip/")}
          >
            <MoreImg bg="/main/lip.webp" />
            <MoreTextBox>
              <MoreCategory>LIP</MoreCategory>
              {moreMenu === "lip" && (
                <MoreContent>
                  극강 매트부터 촉촉 립까지,
                  <br />
                  당신이 원하는 모든 포뮬러를 만나보세요.
                </MoreContent>
              )}
            </MoreTextBox>
          </MoreBox>
          <MoreBox
            className={moreMenu === "eye" ? "active" : ""}
            onMouseEnter={onMouseEnterMore("eye")}
            onClick={onClickMoveToPage("/products/eye/")}
          >
            <MoreImg bg="/main/eye.webp" />
            <MoreTextBox>
              <MoreCategory>EYE</MoreCategory>
              {moreMenu === "eye" && (
                <MoreContent>
                  섀도우, 라이너, 마스카라 등을 사용하여
                  <br />
                  당신의 눈을 돋보이게 연출해보세요.
                </MoreContent>
              )}
            </MoreTextBox>
          </MoreBox>
          <MoreBox
            className={moreMenu === "face" ? "active" : ""}
            onMouseEnter={onMouseEnterMore("face")}
            onClick={onClickMoveToPage("/products/face/")}
          >
            <MoreImg bg="/main/face.webp" />
            <MoreTextBox>
              <MoreCategory>FACE</MoreCategory>
              {moreMenu === "face" && (
                <MoreContent>
                  모두를 위한 쉐이드의 포뮬러로
                  <br />
                  페이스를 완성해보세요.
                </MoreContent>
              )}
            </MoreTextBox>
          </MoreBox>
        </MoreWrap>
      </MainContainer>
    </MainSection>
  );
}
