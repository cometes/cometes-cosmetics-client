import * as S from "./style";
import * as C from "../style";
import { useCallback, useRef } from "react";
import CollectionVideo from "../../slider/collection/video";
import ArrowWrap from "./arrow";
import { useSlickArrow } from "../../../hooks/custom/useSlickArrow";

export default function CollectionVideoWrap(props) {
  const { previous, next, sliderRef } = useSlickArrow();

  return (
    <S.VideoSection>
      <S.Container>
        <S.VideoWrap>
          <S.VideoLeft>
            <div>
              <S.VideoTitle>
                {props.data?.videoTitleT}
                <br />
                {props.data?.videoTitleB}
              </S.VideoTitle>
              <S.VideoContent>{props.data?.videoContent}</S.VideoContent>
            </div>
            <S.Arrow>
              <ArrowWrap previous={previous} next={next} color={props.color} />
            </S.Arrow>
          </S.VideoLeft>
          <S.VideoRight>
            <CollectionVideo
              data={props.data?.videoItem}
              color={props.color}
              sliderRef={sliderRef}
            />
          </S.VideoRight>
        </S.VideoWrap>
      </S.Container>
    </S.VideoSection>
  );
}
