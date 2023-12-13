import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const BgWrap = styled.div<{
  bg: string;
}>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => `#a8a8a8 url(${props.bg}) no-repeat 10% / cover;`};
  background-blend-mode: multiply;
`;
export const WrapperBg = styled.img`
  display: block;
  width: 100%;
`;
export const Container = styled.div`
  width: 1620px;
  height: 100vh;
  padding: 0 80px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${max(1635)} {
    width: 100%;
    padding: 0 40px;
  }
  ${max(1015)} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RightWrap = styled.div`
  width: 50%;
  overflow: hidden;

  ${max(1015)} {
    width: 80%;
    margin-top: 60px;
  }
`;
export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 8rem;
  color: #fff;
  text-transform: uppercase;

  ${max(1015)} {
    font-size: 5rem;
  }
`;
export const SelectWrap = styled.div`
  margin-top: 20px;
  position: relative;
  width: 260px;
  border: 1px solid #fff;
  font-size: 16px;
  color: #fff;
  background: none;
  cursor: pointer;
`;
export const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const SelectIcon = styled.i`
  font-size: 2.4rem;
  display: block;
  height: 24px;
`;
export const OptionBox = styled.ul<{
  isSelectOn: boolean;
}>`
  width: 100%;
  max-height: ${props => (props.isSelectOn ? "500px" : "0")};
  overflow: hidden;
  position: absolute;
  z-index: 999;
  top: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
`;
export const OptionList = styled.li`
  padding: 20px;
  cursor: pointer;

  &:hover {
    & a::after {
      background: #fff;
    }
  }
`;
export const OptionItem = styled.a`
  text-transform: uppercase;
  display: inline-block;
  line-height: 1.6rem;
  color: #fff;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    top: 100%;
    left: 0;
    background: transparent;
    transition: all 0.3s ease-in-out;
  }
`;
