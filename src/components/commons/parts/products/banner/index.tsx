import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import { useRouter } from "next/router";
import ProductSlick from "../../slider/products";

const selectArr = [
  {
    option: "ALL",
    url: "/products/all/"
  },
  {
    option: "NEW",
    url: "/products/new/"
  },
  {
    option: "BEST",
    url: "/products/best/"
  },
  {
    option: "LIP",
    url: "/products/lip/"
  },
  {
    option: "EYE",
    url: "/products/eye/"
  },
  {
    option: "FACE",
    url: "/products/face/"
  }
];

export default function ProductsBannerWrap(props) {
  const router = useRouter();

  // 현재 페이지 메뉴 숨김 처리
  const currentArr = selectArr.filter(el => !el.url.includes(router.asPath));
  const current = router.asPath.split("/")[2];

  const [isSelectOn, setIsSelectOn] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();

  const onClickSelect = () => {
    setIsSelectOn(prev => !prev);
  };

  // select 영역 밖 클릭 시 select 닫힘
  const selectRef = useRef(null);

  const handleClickOutside = ({ target }) => {
    if (!selectRef.current.contains(target) && isSelectOn) {
      setIsSelectOn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isSelectOn]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.LeftWrap>
          <S.Title>{current}</S.Title>
          <S.SelectWrap>
            <S.SelectBox onClick={onClickSelect} ref={selectRef}>
              <S.OptionItem>{current}</S.OptionItem>
              <S.SelectIcon
                className={
                  isSelectOn
                    ? "fi fi-rr-angle-small-up"
                    : "fi fi-rr-angle-small-down"
                }
              />
            </S.SelectBox>
            <S.OptionBox isSelectOn={isSelectOn}>
              {currentArr.map(el => (
                <S.OptionList onClick={onClickMoveToPage(el.url)}>
                  <S.OptionItem>{el.option}</S.OptionItem>
                </S.OptionList>
              ))}
            </S.OptionBox>
          </S.SelectWrap>
        </S.LeftWrap>
        <S.RightWrap>
          <ProductSlick />
        </S.RightWrap>
      </S.Container>
      <S.BgWrap bg={props.bg} />
    </S.Wrapper>
  );
}
