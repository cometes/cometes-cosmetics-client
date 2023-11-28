import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.header<{
  ishover: number;
  iswhite: number;
}>`
  width: 100%;
  background: ${props =>
    props.ishover || props.iswhite
      ? "#fff"
      : "linear-gradient(180deg,rgba(51, 51, 51, 0.3) 0%,rgba(51, 51, 51, 0) 100% );"};
  position: ${props => (props.iswhite ? "relative" : "fixed")};
  top: 0;
  z-index: 9999;
  border-bottom: ${props =>
    props.ishover || props.iswhite ? "1px solid #d9d9d9" : ""};
  overflow: ${props => (props.ishover ? "visible" : "hidden")};
`;
export const Container = styled.div`
  width: 1620px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${mq.pc} {
    width: 100%;
    padding: 0 80px;
  }
`;
export const Logo = styled.img`
  display: block;
  height: 20px;
  width: auto;
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
`;
export const NavItem = styled.a<{
  ishover: number;
  iswhite: number;
}>`
  display: block;
  line-height: 1.6rem;
  color: ${props => (props.ishover || props.iswhite ? "#222" : "#fff")};
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
export const LoupeIcon = styled(FontAwesomeIcon)<{
  ishover: number;
  iswhite: number;
}>`
  font-size: 2.4rem;
  color: ${props => (props.ishover || props.iswhite ? "#222" : "#fff")};
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
  color: #666;
  cursor: pointer;
  &:hover {
    color: #222;
    font-weight: 600;
  }
`;
