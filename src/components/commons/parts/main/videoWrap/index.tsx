import YouTube from "react-youtube";
import * as S from "./style";

export default function MainVideoWrap() {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      loop: 1,
      playlist: "C54ENWJLQBk",
      controls: 0
    }
  };
  return (
    <S.VideoSection>
      <S.VideoContainer>
        <S.VideoTextWrap>
          <S.VideoSubTitle>
            NOW <strong>#TREND</strong>
          </S.VideoSubTitle>
          <S.VideoTitle>#홀리데이</S.VideoTitle>
        </S.VideoTextWrap>
        <S.VideoWrap>
          <S.VideoBox>
            <YouTube
              videoId="C54ENWJLQBk"
              opts={opts}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              onReady={e => {
                e.target.mute(); //소리 끔
              }}
            />
          </S.VideoBox>
        </S.VideoWrap>
      </S.VideoContainer>
    </S.VideoSection>
  );
}
