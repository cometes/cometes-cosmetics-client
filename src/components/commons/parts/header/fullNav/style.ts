import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const FullNav = styled.div`
  opacity: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 1000;
  padding: 0 40px;
  background-color: rgba(6, 6, 6, 0.5);
  backdrop-filter: blur(30px);

  &.active {
    animation: fullNavAppear 0.5s ease-in-out forwards;
  }
  &.disable {
    animation: fullNavDisappear 0.5s ease-in-out forwards;
  }

  @keyframes fullNavAppear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fullNavDisappear {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  ${max(768)} {
    padding: 0 24px;
  }
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
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  &.active {
    max-height: 500px;
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
