import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

export const StoryWrap = styled.div`
  display: flex;

  ${max(1015)} {
    flex-direction: column;
  }
`;
export const TextWrap = styled.div`
  width: 43%;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${max(1215)} {
    width: 50%;
    padding-right: 0;
  }
  ${max(1015)} {
    width: 100%;
  }
`;
export const TextBox = styled.div`
  padding: 20px 0;
  ${max(1015)} {
    padding: 30px 0;
  }
`;
export const StorySubText = styled.span`
  display: block;
  font-size: 2rem;
  color: #aaa;
  font-family: "AritaBuri";
  font-weight: 600;
`;
export const StoryTitle = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 5rem;
  font-weight: 400;
  margin-top: 20px;

  ${max(1215)} {
    font-size: 4rem;
  }
`;
export const StoryContent = styled.p`
  color: #222;
  line-height: 2.4rem;
  word-break: keep-all;
  margin-top: 20px;
`;
export const ArrowBox = styled.div`
  ${max(1015)} {
    display: none;
  }
`;
export const ProgressWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  ${max(1015)} {
    display: none;
  }
`;
export const ProgressBox = styled.div<{
  progress: number;
}>`
  width: 40%;
  height: 2px;
  background: #ccc;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => `${props.progress}%`};
    height: 100%;
    background-color: #af3832;
    transition: all 0.5s ease-in-out;
  }
`;
export const ProgressNumber = styled.span`
  display: block;
  font-family: "AritaBuri";
  font-weight: 600;
  color: #ccc;
  padding: 0 8px;
  transition: all 0.3s ease-in-out;

  &.active {
    color: #af3832;
  }
`;
export const SlickWrap = styled.div`
  overflow: hidden;
  width: 57%;

  ${max(1215)} {
    width: 50%;
  }
  ${max(1015)} {
    width: 100%;
  }
`;
