import * as S from "./style";
import { useState } from "react";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import { navItem } from "../../../../commons/libraries/array";
import MediaQuery from "react-responsive";
import { useRouter } from "next/router";
import LoginModal from "../../parts/modal/login";
import { useModal } from "../../hooks/custom/useModal";
import SearchBox from "../../parts/search";

export default function Header(props) {
  const router = useRouter();
  const [isBgOn, setIsBgOn] = useState(false);
  const [isFullNavOn, setIsFullNavOn] = useState(false);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [ishover, setishover] = useState(false);
  const [menu, setMenu] = useState("");
  const { onClickMoveToPage } = useMoveToPage();
  const { isModalOpen, handleOk, handleCancel, showModal } = useModal();

  const onClickFullMenu = (value: string) => () => {
    if (value === menu) {
      setMenu("");
    } else {
      setMenu(value);
    }
  };

  const onClickFullNav = () => {
    setIsFullNavOn(prev => !prev);
    setIsSearchOn(false);
  };

  const onClickSubMenu = (url: string) => () => {
    router.push(url);
    setIsFullNavOn(false);
    setishover(false);
    setIsSearchOn(false);
  };

  const onClickSearch = () => {
    setIsSearchOn(prev => !prev);
    setIsFullNavOn(false);
  };

  return (
    <>
      <LoginModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <S.Wrapper
        ishover={ishover ? 1 : 0}
        isFullNavOn={isFullNavOn ? 1 : 0}
        isSearchOn={isSearchOn ? 1 : 0}
        iswhite={props.iswhite ? 1 : 0}
        onMouseEnter={() => {
          setishover(true);
        }}
        onMouseLeave={() => {
          setishover(false);
        }}
      >
        <S.Container>
          <a href="/">
            <S.Logo
              src={
                ishover || props.iswhite || isFullNavOn || isSearchOn
                  ? "/logo/logo-black.svg"
                  : "/logo/logo-white.svg"
              }
              alt="logo"
            />
          </a>
          <S.NavWrap>
            <S.NavBox>
              {navItem.map(el => (
                <S.NavList
                  key={el.title}
                  onMouseEnter={() => {
                    if (el.sub[0] !== undefined) {
                      setIsBgOn(true);
                    }
                    setMenu(el.title);
                  }}
                  onMouseLeave={() => {
                    setIsBgOn(false);
                    setMenu("");
                  }}
                >
                  <S.NavItem
                    ishover={ishover ? 1 : 0}
                    isSearchOn={isSearchOn ? 1 : 0}
                    iswhite={props.iswhite ? 1 : 0}
                    onClick={onClickSubMenu(el.url)}
                  >
                    {el.title}
                  </S.NavItem>
                  <S.SubNavBox
                    active={
                      ishover && el.sub[0] !== undefined && el.title === menu
                    }
                  >
                    {el.sub.map(sub => (
                      <S.SubNavList key={sub.title}>
                        <S.SubNavItem onClick={onClickSubMenu(sub.url)}>
                          {sub.title}
                        </S.SubNavItem>
                      </S.SubNavList>
                    ))}
                  </S.SubNavBox>
                </S.NavList>
              ))}
            </S.NavBox>
          </S.NavWrap>
          <S.ButtonWrap>
            <S.NavBox>
              <S.NavList>
                <S.Button>
                  <S.LoupeIcon
                    className="fi fi-rr-search"
                    ishover={ishover ? 1 : 0}
                    isFullNavOn={isFullNavOn ? 1 : 0}
                    isSearchOn={isSearchOn ? 1 : 0}
                    iswhite={props.iswhite ? 1 : 0}
                    onClick={onClickSearch}
                  ></S.LoupeIcon>
                </S.Button>
              </S.NavList>
              <S.NavList className="max1000">
                <S.NavItem
                  ishover={ishover ? 1 : 0}
                  iswhite={props.iswhite ? 1 : 0}
                  isSearchOn={isSearchOn ? 1 : 0}
                  onClick={showModal}
                >
                  LOGIN
                </S.NavItem>
              </S.NavList>
              <S.NavList className="max1000">
                <S.NavItem
                  ishover={ishover ? 1 : 0}
                  iswhite={props.iswhite ? 1 : 0}
                  isSearchOn={isSearchOn ? 1 : 0}
                  onClick={onClickMoveToPage("/signup/")}
                >
                  JOIN
                </S.NavItem>
              </S.NavList>
              <S.NavList className="min1000">
                <S.Button>
                  <S.LoupeIcon
                    className="fi fi-rr-user"
                    ishover={ishover ? 1 : 0}
                    isFullNavOn={isFullNavOn ? 1 : 0}
                    isSearchOn={isSearchOn ? 1 : 0}
                    iswhite={props.iswhite ? 1 : 0}
                  ></S.LoupeIcon>
                </S.Button>
              </S.NavList>
              <S.NavList className="min1000">
                <S.NavButton onClick={onClickFullNav}>
                  <S.Line className="line1" />
                  <S.Line className="line2" />
                  <S.Line className="line3" />
                </S.NavButton>
              </S.NavList>
            </S.NavBox>
          </S.ButtonWrap>
          <S.Bg isBgOn={isBgOn} />
        </S.Container>
      </S.Wrapper>
      <SearchBox isSearchOn={isSearchOn} />
      <S.FullNav isFullNavOn={isFullNavOn ? 1 : 0}>
        <S.FullNavBox>
          {navItem.map(el => (
            <S.FullNavList onClick={onClickFullMenu(el.title)}>
              <S.FullNavItem>{el.title}</S.FullNavItem>
              <S.FullSubNavBox
                className={
                  el.sub[0] !== undefined && el.title === menu ? "active" : ""
                }
              >
                {el.sub.map(sub => (
                  <S.FullSubNavList>
                    <S.FullSubNavItem onClick={onClickSubMenu(sub.url)}>
                      {sub.title}
                    </S.FullSubNavItem>
                  </S.FullSubNavList>
                ))}
              </S.FullSubNavBox>
            </S.FullNavList>
          ))}
        </S.FullNavBox>
      </S.FullNav>
    </>
  );
}
