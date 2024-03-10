import styled from "@emotion/styled";
import { max } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));

  ${max(768)} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Thumbnail = styled.div<{
  bg: string;
}>`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: ${props => `#a8a8a8 url(${props.bg}) no-repeat 50% / cover`};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 30px 20px;
  position: relative;

  ${max(500)} {
    padding: 20px;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => `#a8a8a8 url(${props.bg}) no-repeat 50% / cover`};
    background-blend-mode: multiply;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
    & h2,
    & a {
      opacity: 1;
      visibility: visible;
    }
  }
`;
export const Title = styled.h2`
  opacity: 0;
  visibility: hidden;
  font-size: 3.6rem;
  color: #fff;
  font-family: "Raleway", sans-serif;
  text-align: end;
  font-weight: 400;
  position: relative;
  z-index: 20;
  transition: all 0.3s ease-in-out;

  ${max(500)} {
    font-size: 2.4rem;
  }
`;
export const TextBtn = styled.a`
  opacity: 0;
  visibility: hidden;
  margin-top: 20px;
  font-family: "Raleway", sans-serif;
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  position: relative;
  z-index: 20;
  transition: all 0.3s ease-in-out;

  ${max(500)} {
    margin-top: 14px;
  }
`;
