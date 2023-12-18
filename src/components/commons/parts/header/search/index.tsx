import * as S from "./style";

export default function SearchBox(props) {
  return (
    <>
      {props.isSearchOn && (
        <S.Wrapper className={props.searchActive}>
          <S.Container>
            <div>
              <S.InputBox>
                <S.Input placeholder="검색어를 입력해 주세요" />
                <S.InputIcon className="fi fi-rr-search" />
              </S.InputBox>
            </div>
            <div>
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
            </div>
          </S.Container>
        </S.Wrapper>
      )}
    </>
  );
}
