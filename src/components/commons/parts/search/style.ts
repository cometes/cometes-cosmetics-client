import styled from "@emotion/styled";
import { max } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div<{
  isSearchOn: number;
}>`
  height: ${props => (props.isSearchOn ? "360px" : "0")};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  background: rgba(247, 247, 247, 0.85);
  backdrop-filter: blur(12px);

  transition: all 0.3s ease-in-out;
`;
export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 160px 0 80px 0;

  ${max(815)} {
    width: 100%;
    padding: 160px 40px 80px 40px;
  }
`;
export const SearchTop = styled.div``;
export const SearchBtm = styled.div``;
export const InputWrap = styled.div``;
export const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const Label = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const Input = styled.input`
  width: 100%;
  padding: 14px 40px 14px 14px;
  color: #000;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  transition: 0.4s;
  font-size: 1.6rem;

  &::placeholder {
    color: #6d6d6d;
  }
`;
export const InputIcon = styled.i`
  display: block;
  font-size: 2rem;
  line-height: 2rem;
  position: absolute;
  right: 12px;
  color: #6d6d6d;
`;
export const RecommendWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  ${max(768)} {
    flex-direction: column;
  }
`;
export const RecommendBox = styled.div`
  margin-left: 30px;
  display: flex;

  ${max(768)} {
    margin-left: 0;
    margin-top: 10px;
  }
`;
export const RecommendTitle = styled.span`
  display: block;
  font-weight: 300;
  font-size: 2.4rem;
`;
export const RecommendButton = styled.button`
  display: block;
  border: 1px solid #ccc;
  background: none;
  color: #111;
  padding: 6px 16px;
  font-size: 1.6rem;
  line-height: 1.6rem;
  margin-left: 10px;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }

  ${max(768)} {
    font-size: 1.4rem;
  }
`;
