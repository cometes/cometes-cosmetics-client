import styled from "@emotion/styled";
import { max, min } from "../../../../../commons/libraries/breakPoints";

export const Wrapper = styled.header<{
  ishover: number;
  isWhite: number;
  active: number;
  scrollLock: number;
}>`
  width: 100%;
  background: ${props =>
    props.active || props.isWhite
      ? "#fff"
      : "linear-gradient(180deg,rgba(51, 51, 51, 0.3) 0%,rgba(51, 51, 51, 0) 100% );"};
  position: ${props => (props.isWhite ? "sticky" : "fixed")};
  top: 0;
  z-index: 999;
  border-bottom: ${props =>
    props.active || props.isWhite ? "1px solid #d9d9d9" : ""};
  overflow: ${props => (props.ishover ? "visible" : "hidden")};
  transition: background-color 0.2s ease, border-bottom 0.2s ease;
  padding-right: ${props => (props.scrollLock ? "15px" : "0")};
`;
export const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${max(1455)} {
    width: 100%;
    padding: 0 40px;
  }
`;
export const Logo = styled.img`
  display: block;
  height: 18px;
  margin: 31px 0;
`;
export const NavWrap = styled.nav`
  ${max(1000)} {
    display: none;
  }
  ${min(1000)} {
    display: block;
  }
`;
export const NavBox = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavList = styled.li`
  margin-left: 60px;

  &.mymac {
    position: relative;

    & ul {
      display: flex;
      justify-content: center;
    }
    & ul li {
      margin-left: 30px;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }

  &:first-of-type {
    margin-left: 0;
  }
  &:hover {
    & > a::after {
      width: 100%;
    }
  }
  &.max1000 {
    ${max(1000)} {
      display: none;
    }
    ${min(1000)} {
      display: block;
    }
  }
  &.min1000 {
    ${max(1000)} {
      display: block;
    }
    ${min(1000)} {
      display: none;
    }
  }

  ${max(1440)} {
    margin-left: 30px;
  }
`;
export const NavItem = styled.a<{
  isWhite: number;
  active: number;
}>`
  position: relative;
  display: block;
  line-height: 1.6rem;
  color: ${props => (props.isWhite || props.active ? "#222" : "#fff")};
  text-align: center;
  cursor: pointer;
  margin: 32px 0;

  &::after {
    content: "";
    width: 0;
    height: 6px;
    background: rgba(175, 56, 50, 0.7);
    display: block;
    position: absolute;
    bottom: -1px;
    z-index: -99;
    transition: all ease-in-out 0.3s;
  }
`;
// =============sub nav=============
export const SubNavBox = styled.ul`
  position: absolute;
  z-index: -999;
  top: 81px;
  left: 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 30px 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.active {
    z-index: 998;
    opacity: 1;
    visibility: visible;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50vw;
    right: -50vw;
    z-index: 0;
    width: 200%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
  }
`;
export const SubNavList = styled.li`
  position: relative;
  z-index: 999;
`;
export const SubNavItem = styled.a`
  display: block;
  font-size: 1.8rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #111;
  }
`;
export const SubContainer = styled.div`
  position: relative;
  z-index: 999;
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  &.col5 {
    width: 1200px;
    grid-template-columns: repeat(5, 1fr);
    gap: 60px;

    ${max(1215)} {
      width: 100%;
      padding: 0 40px;
      gap: 30px;
    }
  }

  ${max(1015)} {
    width: 100%;
    padding: 0 40px;
  }
`;
export const NewImg = styled.img`
  display: block;
  background-color: #ccc;
  aspect-ratio: 16 / 9;
  width: 100%;
  cursor: pointer;
  object-fit: cover;
`;
export const NewTitle = styled.p`
  margin-top: 20px;
  cursor: pointer;
`;
export const NewContent = styled.p`
  margin-top: 18px;
  cursor: pointer;
`;
export const NewTextBtn = styled.a`
  display: block;
  text-decoration: underline;
  margin-top: 18px;
  cursor: pointer;
`;
export const ProductsBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:last-of-type {
    margin-top: 18px;
  }
`;
export const ProductsCollection = styled.div`
  & a {
    margin-top: 16px;
  }
`;
export const ProductsTitle = styled.a`
  display: block;
  font-size: 1.8rem;
`;
export const ProductsSub = styled.a`
  display: block;
  color: #666;
  margin-top: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #111;
  }
`;
export const ProductsArrow = styled.i`
  display: block;
  font-size: 2rem;
  height: 2rem;
  margin-left: 6px;
`;
export const ProductsImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: block;
  background-color: #ccc;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavIcon = styled.i<{
  isWhite: number;
  active: number;
}>`
  display: block;
  font-size: 2.4rem;
  line-height: 2.4rem;
  color: ${props => (props.active || props.isWhite ? "#222" : "#fff")};
`;
export const NavButton = styled.div`
  width: 36px;
  height: 36px;
  padding: 8px;
  background-color: #111;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Line = styled.div<{
  isOpen?: boolean;
}>`
  display: block;
  height: 2px;
  width: 100%;
  background: #fff;
  transition: transform 0.2s ease-in-out;
  &.line1 {
    width: 8px;
    transform-origin: 0% 0%;
    transform: ${props => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  }
  &.line2 {
    transform: ${props => (props.isOpen ? "scaleY(0)" : "scaleY(1)")};
  }
  &.line3 {
    width: 12px;
    transform-origin: 0% 100%;
    transform: ${props => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
