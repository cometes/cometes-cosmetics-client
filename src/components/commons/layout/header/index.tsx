import * as S from "./style";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import { navItem } from "../../../../commons/libraries/array";

export default function Header(props) {
  const [isBgOn, setIsBgOn] = useState(false);
  const [ishover, setishover] = useState(false);
  const [menu, setMenu] = useState("");
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.Wrapper
        ishover={ishover ? 1 : 0}
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
                ishover || props.iswhite
                  ? "/logo/logo-black.svg"
                  : "/logo/logo-white.svg"
              }
              alt="logo"
            />
          </a>
          <nav>
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
                    iswhite={props.iswhite ? 1 : 0}
                  >
                    {el.title}
                  </S.NavItem>
                  <S.SubNavBox
                    active={
                      ishover && el.sub[0] !== undefined && el.title === menu
                    }
                  >
                    {el.sub.map(sub => (
                      <S.SubNavList key={sub}>
                        <S.SubNavItem>{sub}</S.SubNavItem>
                      </S.SubNavList>
                    ))}
                  </S.SubNavBox>
                </S.NavList>
              ))}
            </S.NavBox>
          </nav>
          <S.ButtonWrap>
            <S.NavBox>
              <S.NavList>
                <S.Button>
                  <S.LoupeIcon
                    icon={faMagnifyingGlass}
                    ishover={ishover ? 1 : 0}
                    iswhite={props.iswhite ? 1 : 0}
                  />
                </S.Button>
              </S.NavList>
              <S.NavList>
                <S.NavItem
                  ishover={ishover ? 1 : 0}
                  iswhite={props.iswhite ? 1 : 0}
                >
                  LOGIN
                </S.NavItem>
              </S.NavList>
              <S.NavList>
                <S.NavItem
                  ishover={ishover ? 1 : 0}
                  iswhite={props.iswhite ? 1 : 0}
                  onClick={onClickMoveToPage("/signup/")}
                >
                  JOIN
                </S.NavItem>
              </S.NavList>
            </S.NavBox>
          </S.ButtonWrap>
          <S.Bg isBgOn={isBgOn} />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
