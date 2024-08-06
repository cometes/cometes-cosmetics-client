import { useEffect, useState } from "react";
import {
  NavNewItem,
  NavProductsItem
} from "../../../../../commons/libraries/array";
import { useLogout } from "../../../hooks/custom/useLogout";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import DivideLine from "../../divideLine";
import * as S from "./style";
import { useAccessToken } from "../../../hooks/custom/useAccessToken";

export default function HeaderMain(props) {
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogout } = useLogout();
  const active =
    props.isFullNavOn ||
    props.isSearchOn ||
    props.ishover ||
    props.currentScroll > 80;

  const scrollHide = props.headerActive;
  const scrollLock = props.isFullNavOn || props.isSearchOn;
  const [isLogin, setIsLogin] = useState(false);
  const { accessToken } = useAccessToken();

  useEffect(() => {
    setIsLogin(accessToken ? true : false);
  }, [isLogin]);

  return (
    <>
      <S.Wrapper
        ishover={props.ishover ? 1 : 0}
        active={active ? 1 : 0}
        isWhite={props.isWhite ? 1 : 0}
        scrollLock={scrollLock ? 1 : 0}
        scrollHide={scrollHide ? 1 : 0}
        onMouseEnter={() => {
          props.setishover(true);
          document.body.style.overflowX = "hidden";
        }}
        onMouseLeave={() => {
          props.setishover(false);
          document.body.style.overflowX = "";
        }}
      >
        <S.Container>
          <a href="/">
            <S.Logo
              src={
                props.isWhite || active
                  ? "/logo/logo-black.svg"
                  : "/logo/logo-white.svg"
              }
              alt="logo"
            />
          </a>
          <S.NavWrap>
            <S.NavBox>
              <S.NavList
                onMouseEnter={props.onMouseEnterNav("NEW")}
                onMouseLeave={props.onMouseLeaveNav}
              >
                <S.NavItem
                  active={active ? 1 : 0}
                  isWhite={props.isWhite ? 1 : 0}
                  onClick={props.onClickSubMenu("/collections/")}
                >
                  WHAT'S NEW
                </S.NavItem>
                <S.SubNavBox className={props.menu === "NEW" ? "active" : ""}>
                  <S.SubNavList>
                    <S.SubContainer>
                      {NavNewItem.map(el => (
                        <div key={el.title}>
                          <S.NewImg
                            src={el.img}
                            onClick={props.onClickSubMenu(el.url)}
                          />
                          <S.NewTitle>{el.title}</S.NewTitle>
                          <S.NewContent>{el.content}</S.NewContent>
                          <S.NewTextBtn onClick={props.onClickSubMenu(el.url)}>
                            VIEW MORE
                          </S.NewTextBtn>
                        </div>
                      ))}
                    </S.SubContainer>
                  </S.SubNavList>
                </S.SubNavBox>
              </S.NavList>
              <S.NavList>
                <S.NavItem
                  active={active ? 1 : 0}
                  isWhite={props.isWhite ? 1 : 0}
                  onClick={props.onClickSubMenu("/products/best/")}
                >
                  BEST
                </S.NavItem>
              </S.NavList>
              <S.NavList
                onMouseEnter={props.onMouseEnterNav("PRODUCTS")}
                onMouseLeave={props.onMouseLeaveNav}
              >
                <S.NavItem
                  active={active ? 1 : 0}
                  isWhite={props.isWhite ? 1 : 0}
                >
                  PRODUCTS
                </S.NavItem>
                <S.SubNavBox
                  className={props.menu === "PRODUCTS" ? "active" : ""}
                >
                  <S.SubNavList>
                    <S.SubContainer className="col5">
                      <div>
                        <S.ProductsBox
                          onClick={props.onClickSubMenu("/products/all/")}
                        >
                          <S.ProductsTitle>전체보기</S.ProductsTitle>
                          <S.ProductsArrow className="fi fi-rr-angle-small-right" />
                        </S.ProductsBox>
                        <S.ProductsBox
                          onClick={props.onClickSubMenu("/products/new/")}
                        >
                          <S.ProductsTitle>신제품</S.ProductsTitle>
                          <S.ProductsArrow className="fi fi-rr-angle-small-right" />
                        </S.ProductsBox>
                      </div>
                      {NavProductsItem.map(el => (
                        <div key={el.title}>
                          <S.ProductsTitle>{el.title}</S.ProductsTitle>
                          <DivideLine
                            border="2px solid #111"
                            margin="10px 0 0 0"
                          />
                          {el.content.map(sub => (
                            <S.ProductsSub
                              key={sub.title}
                              onClick={props.onClickSubMenu(sub.url)}
                            >
                              {sub.title}
                            </S.ProductsSub>
                          ))}
                        </div>
                      ))}
                      <S.ProductsCollection>
                        <S.ProductsImg
                          src={NavNewItem[0].img}
                          onClick={props.onClickSubMenu(NavNewItem[0].url)}
                        />
                        <S.ProductsTitle>NEW COLLECTION</S.ProductsTitle>
                        <S.ProductsSub>{NavNewItem[0].title}</S.ProductsSub>
                      </S.ProductsCollection>
                    </S.SubContainer>
                  </S.SubNavList>
                </S.SubNavBox>
              </S.NavList>
              <S.NavList
                onMouseEnter={props.onMouseEnterNav("about")}
                onMouseLeave={props.onMouseLeaveNav}
                className="horizontal"
              >
                <S.NavItem
                  active={active ? 1 : 0}
                  isWhite={props.isWhite ? 1 : 0}
                >
                  ABOUT
                </S.NavItem>
                <S.SubNavBox className={props.menu === "about" ? "active" : ""}>
                  <S.SubNavList>
                    <S.SubNavItem
                      onClick={props.onClickSubMenu("/about/story/")}
                    >
                      Our Story
                    </S.SubNavItem>
                  </S.SubNavList>
                  <S.SubNavList>
                    <S.SubNavItem
                      onClick={props.onClickSubMenu("/about/mac-aids-fund/")}
                    >
                      맥 에이즈 펀드
                    </S.SubNavItem>
                  </S.SubNavList>
                </S.SubNavBox>
              </S.NavList>
              <S.NavList
                onMouseEnter={props.onMouseEnterNav("MYMAC")}
                onMouseLeave={props.onMouseLeaveNav}
                className="horizontal"
              >
                <S.NavItem
                  active={active ? 1 : 0}
                  isWhite={props.isWhite ? 1 : 0}
                  onClick={props.onClickSubMenu("/mypage/")}
                >
                  MY M·A·C
                </S.NavItem>
                <S.SubNavBox className={props.menu === "MYMAC" ? "active" : ""}>
                  <S.SubNavList>
                    <S.SubNavItem
                      onClick={props.onClickSubMenu("/mypage/cart/")}
                    >
                      장바구니
                    </S.SubNavItem>
                  </S.SubNavList>
                  <S.SubNavList>
                    <S.SubNavItem
                      onClick={props.onClickSubMenu("/mypage/point/")}
                    >
                      포인트
                    </S.SubNavItem>
                  </S.SubNavList>
                  <S.SubNavList>
                    <S.SubNavItem
                      onClick={props.onClickSubMenu("/mypage/order/list/")}
                    >
                      주문내역
                    </S.SubNavItem>
                  </S.SubNavList>
                </S.SubNavBox>
              </S.NavList>
            </S.NavBox>
          </S.NavWrap>
          <S.ButtonWrap>
            <S.NavBox>
              <S.NavList>
                <S.Button onClick={props.onClickSearch}>
                  <S.NavIcon
                    className="fi fi-rr-search"
                    active={active ? 1 : 0}
                    isWhite={props.isWhite ? 1 : 0}
                  />
                </S.Button>
              </S.NavList>
              {/* =====fullpage===== */}
              {isLogin && (
                <S.NavList className="max1000">
                  <S.Button onClick={onClickLogout}>
                    <S.NavIcon
                      className="fi fi-rr-sign-out-alt"
                      active={active ? 1 : 0}
                      isWhite={props.isWhite ? 1 : 0}
                    />
                  </S.Button>
                </S.NavList>
              )}
              {!isLogin && (
                <>
                  <S.NavList className="max1000">
                    <S.NavItem
                      active={active ? 1 : 0}
                      isWhite={props.isWhite ? 1 : 0}
                      onClick={props.showModal}
                    >
                      LOGIN
                    </S.NavItem>
                  </S.NavList>
                  <S.NavList className="max1000">
                    <S.NavItem
                      active={active ? 1 : 0}
                      isWhite={props.isWhite ? 1 : 0}
                      onClick={onClickMoveToPage("/signup/")}
                    >
                      JOIN
                    </S.NavItem>
                  </S.NavList>
                </>
              )}
              {/* =====fullpage===== */}
              {/* =====w1000===== */}
              <S.NavList className="min1000">
                <S.Button onClick={isLogin ? onClickLogout : props.showModal}>
                  <S.NavIcon
                    className={
                      isLogin ? "fi fi-rr-sign-out-alt" : "fi fi-rr-user"
                    }
                    active={active ? 1 : 0}
                    isWhite={props.isWhite ? 1 : 0}
                  />
                </S.Button>
              </S.NavList>
              <S.NavList className="min1000">
                <S.NavButton onClick={props.onClickFullNavBtn}>
                  <S.Line className="line1" />
                  <S.Line className="line2" />
                  <S.Line className="line3" />
                </S.NavButton>
              </S.NavList>
              {/* =====w1000===== */}
            </S.NavBox>
          </S.ButtonWrap>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
