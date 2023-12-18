import { useState } from "react";
import ArrowWrap from "../../collection/videoWrap/arrow";
import MainStory from "../../slider/main/story";
import * as S from "./style";
import { useSlickArrow } from "../../../hooks/custom/useSlickArrow";
import { MainContainer, MainSection, MainTextBtn, MainTitle } from "../../../../units/main/style";

export default function MainStoryWrap(props) {
  const [progressBar, setProgressBar] = useState(0);
  const [title, setTitle] = useState(props.data[0]?.title);
  const [content, setContent] = useState(props.data[0].content);
  const [idx, setIdx] = useState(1);
  const { previous, next, sliderRef } = useSlickArrow();

  const progress = (_, newIndex: number) => {
    const calc = (newIndex / (props.data.length - 1)) * 100;
    setProgressBar(calc);
    setTitle(props.data[newIndex]?.title);
    setContent(props.data[newIndex]?.content);
    setIdx(newIndex + 1);
  };

  return (
    <MainSection>
      <MainContainer>
        <S.StoryWrap>
          <S.TextWrap>
            <MainTitle>M·A·C CAMPAIGN</MainTitle>
            <div>
              <S.StorySubText>{String(idx).padStart(2, "0")}</S.StorySubText>
              <S.StoryTitle>{title}</S.StoryTitle>
              <S.StoryContent>{content}</S.StoryContent>
              <MainTextBtn>view more</MainTextBtn>
            </div>
            <div>
              <ArrowWrap previous={previous} next={next} />
              <S.ProgressWrap>
                <S.ProgressNumber className="active">1</S.ProgressNumber>
                <S.ProgressBox progress={progressBar}></S.ProgressBox>
                <S.ProgressNumber
                  className={progressBar === 100 ? "active" : ""}
                >
                  {props.data?.length}
                </S.ProgressNumber>
              </S.ProgressWrap>
            </div>
          </S.TextWrap>
          <S.SlickWrap>
            <MainStory
              progress={progress}
              sliderRef={sliderRef}
              data={props.data}
            />
          </S.SlickWrap>
        </S.StoryWrap>
      </MainContainer>
    </MainSection>
  );
}
