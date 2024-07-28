import { useEffect, useState } from "react";
import * as S from "./style";
import { debounce } from "lodash";

export default function FullNav(props) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = debounce(() => {
      setScreenWidth(window.innerWidth);
    }, 500);

    if (screenWidth > 1000) {
      props.setIsFullNavOn(false);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [screenWidth]);

  return (
    <>
      {props.isFullNavOn && (
        <S.FullNav className={props.fullNavActive}>
          <S.FullNavBox>
            <S.FullNavList onClick={props.onClickSubMenu("/collections/")}>
              <S.FullNavItem>WHAT'S NEW</S.FullNavItem>
            </S.FullNavList>
            <S.FullNavList onClick={props.onClickSubMenu("/products/best/")}>
              <S.FullNavItem>BEST</S.FullNavItem>
            </S.FullNavList>
            <S.FullNavList onClick={props.onClickFullMenu("PRODUCTS")}>
              <S.FullNavItem>PRODUCTS</S.FullNavItem>
              <S.FullSubNavBox
                className={props.menu === "PRODUCTS" ? "active" : ""}
              >
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/products/all/")}
                  >
                    전체보기
                  </S.FullSubNavItem>
                </S.FullSubNavList>
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/products/lip/")}
                  >
                    립
                  </S.FullSubNavItem>
                </S.FullSubNavList>
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/products/eye/")}
                  >
                    아이
                  </S.FullSubNavItem>
                </S.FullSubNavList>
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/products/face/")}
                  >
                    페이스
                  </S.FullSubNavItem>
                </S.FullSubNavList>
              </S.FullSubNavBox>
            </S.FullNavList>
            <S.FullNavList onClick={props.onClickFullMenu("ABOUT")}>
              <S.FullNavItem>ABOUT</S.FullNavItem>
              <S.FullSubNavBox
                className={props.menu === "ABOUT" ? "active" : ""}
              >
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/about/story/")}
                  >
                    Our Story
                  </S.FullSubNavItem>
                </S.FullSubNavList>
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/about/mac-aids-fund/")}
                  >
                    맥 에이즈 펀드
                  </S.FullSubNavItem>
                </S.FullSubNavList>
              </S.FullSubNavBox>
            </S.FullNavList>
            <S.FullNavList onClick={props.onClickFullMenu("MYMAC")}>
              <S.FullNavItem>MY M·A·C</S.FullNavItem>
              <S.FullSubNavBox
                className={props.menu === "MYMAC" ? "active" : ""}
              >
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/mypage/cart/")}
                  >
                    장바구니
                  </S.FullSubNavItem>
                </S.FullSubNavList>
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/mypage/point/")}
                  >
                    포인트
                  </S.FullSubNavItem>
                </S.FullSubNavList>
                <S.FullSubNavList>
                  <S.FullSubNavItem
                    onClick={props.onClickSubMenu("/mypage/order/list/")}
                  >
                    구매내역
                  </S.FullSubNavItem>
                </S.FullSubNavList>
              </S.FullSubNavBox>
            </S.FullNavList>
          </S.FullNavBox>
        </S.FullNav>
      )}
    </>
  );
}
