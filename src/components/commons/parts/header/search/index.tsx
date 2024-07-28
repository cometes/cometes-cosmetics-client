import { useRouter } from "next/router";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import { useSearchProduct } from "../../../hooks/queries/searchProduct";
import * as S from "./style";

export default function SearchBox(props) {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickRecommend = (path: string) => () => {
    props.setIsSearchOn(false);
    onClickMoveToPage(path);
  };

  const onSubmitSearch = async e => {
    if (e.key === "Enter") {
      router.push(`/products/search/${e.target.value}/`);
      props.onClickSearch()
    }
  };

  return (
    <>
      {props.isSearchOn && (
        <S.Wrapper className={props.searchActive}>
          <S.Container>
            <div>
              <S.InputBox>
                <S.Input
                  placeholder="검색어를 입력해 주세요"
                  onKeyPress={onSubmitSearch}
                />
                <S.InputIcon className="fi fi-rr-search" />
              </S.InputBox>
            </div>
            <div>
              <S.RecommendWrap>
                <S.RecommendTitle>
                  NOW <strong>#TREND</strong>
                </S.RecommendTitle>
                <S.RecommendBox>
                  <S.RecommendButton
                    onClick={onClickRecommend("/propducts/new")}
                  >
                    신제품
                  </S.RecommendButton>
                  <S.RecommendButton
                    onClick={onClickRecommend("/products/lip/lipstick")}
                  >
                    립스틱
                  </S.RecommendButton>
                  <S.RecommendButton
                    onClick={onClickRecommend("/collections/mac-lisa/")}
                  >
                    리사
                  </S.RecommendButton>
                  <S.RecommendButton
                    onClick={onClickRecommend("/collections/mac-2023-holiday/")}
                  >
                    홀리데이
                  </S.RecommendButton>
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
