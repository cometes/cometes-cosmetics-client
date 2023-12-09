import styled from "@emotion/styled";
import { max, min } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.header<{
  ishover: number;
  iswhite: number;
  isFullNavOn: number;
  isSearchOn: number;
}>`
  width: 100%;
  background: ${props =>
    props.ishover || props.iswhite || props.isFullNavOn || props.isSearchOn
      ? "#fff"
      : "linear-gradient(180deg,rgba(51, 51, 51, 0.3) 0%,rgba(51, 51, 51, 0) 100% );"};
  position: ${props => (props.iswhite ? "sticky" : "fixed")};
  top: 0;
  z-index: 9999;
  border-bottom: ${props =>
    props.ishover || props.iswhite || props.isFullNavOn || props.isSearchOn
      ? "1px solid #d9d9d9"
      : ""};
  overflow: ${props => (props.ishover ? "visible" : "hidden")};
  transition: background-color 0.2s ease;
`;
export const Container = styled.div`
  width: 1620px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${max(1635)} {
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
  position: relative;
  margin-left: 60px;
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
  ishover: number;
  iswhite: number;
  isSearchOn: number;
}>`
  display: block;
  line-height: 1.6rem;
  color: ${props =>
    props.ishover || props.iswhite || props.isSearchOn ? "#222" : "#fff"};
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
    bottom: 30px;
    z-index: -99;
    transition: all ease-in-out 0.3s;
  }
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
export const LoupeIcon = styled.i<{
  ishover: number;
  iswhite: number;
  isFullNavOn: number;
  isSearchOn: number;
}>`
  display: block;
  font-size: 2.4rem;
  line-height: 2.4rem;
  color: ${props =>
    props.ishover || props.iswhite || props.isFullNavOn || props.isSearchOn
      ? "#222"
      : "#fff"};
`;
export const Bg = styled.div<{
  isBgOn: boolean;
}>`
  position: absolute;
  z-index: 2;
  top: 81px;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  width: 100%;
  height: ${props => (props.isBgOn ? "160px" : "0")};
  transition: all ease-in-out 0.3s;
`;
export const SubNavBox = styled.ul<{
  active: boolean;
}>`
  position: absolute;
  width: 100%;
  padding: 30px 0;
  z-index: 3;
  opacity: ${props => (props.active ? "1" : "0")};
  transition: all ease-in-out 0.3s;
`;
export const SubNavList = styled.li`
  margin-top: 20px;

  &:first-of-type {
    margin-top: 0;
  }
`;
export const SubNavItem = styled.a`
  display: block;
  font-size: 1.8rem;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #111;
    font-weight: 600;
  }
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
export const FullNav = styled.div<{
  isFullNavOn: number;
}>`
  opacity: ${props => (props.isFullNavOn ? "1" : "0")};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: ${props => (props.isFullNavOn ? "9998" : "-9999")};
  padding: 0 40px;
  background-color: rgba(6, 6, 6, 0.5);
  backdrop-filter: blur(30px);
  transition: all 0.3s ease-in-out;
`;
export const FullNavBox = styled.ul`
  width: 100%;
`;
export const FullNavList = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 0;
  cursor: pointer;

  &:hover {
    & > a::after {
      width: 100%;
    }
  }
`;
export const FullNavItem = styled.a`
  display: inline-block;
  font-size: 2rem;
  color: #fff;
  position: relative;

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
export const FullSubNavBox = styled.ul`
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &.active {
    height: 144px;
  }
`;
export const FullSubNavList = styled.li`
  &:first-of-type {
    margin-top: 30px;
  }
`;
export const FullSubNavItem = styled.a`
  display: block;
  color: #fff;
  opacity: 0.2;
  font-size: 1.8rem;
  line-height: 1.8rem;
  padding: 10px 20px;
  transition: all 0.4s ease-in-out;
  transition-delay: 0.12s;

  &:hover {
    opacity: 1;
  }
`;
