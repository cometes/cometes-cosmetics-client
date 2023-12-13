import * as S from "./style";

export default function SearchBox(props) {
  return (
    <S.Wrapper isSearchOn={props.isSearchOn ? 1 : 0}>
      <S.Container>
        <S.SearchTop>
          <S.InputWrap>
            <S.InputBox>
              <S.Input placeholder="검색어를 입력해 주세요" />
              <S.InputIcon className="fi fi-rr-search" />
            </S.InputBox>
          </S.InputWrap>
        </S.SearchTop>
        <S.SearchBtm>
          <S.RecommendWrap>
            <S.RecommendTitle>
              NOW <strong>#TREND</strong>
            </S.RecommendTitle>
            <S.RecommendBox>
              <S.RecommendButton>신제품</S.RecommendButton>
              <S.RecommendButton>립스틱</S.RecommendButton>
              <S.RecommendButton>리사</S.RecommendButton>
              <S.RecommendButton>홀리데이</S.RecommendButton>
              <S.RecommendButton>한정판</S.RecommendButton>
            </S.RecommendBox>
          </S.RecommendWrap>
        </S.SearchBtm>
      </S.Container>
    </S.Wrapper>
  );
}
