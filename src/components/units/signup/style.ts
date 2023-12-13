import styled from "@emotion/styled";
import { max } from "../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${max(430)} {
    padding: 0 16px;
  }
`;
export const Logo = styled.img`
  display: block;
  width: 20rem;

  ${max(430)} {
    width: 18rem;
  }
`;
export const Container = styled.div`
  background-color: #fff;
  border: 1px solid #e4e5ed;
  padding: 60px 80px;
  margin-top: 30px;

  ${max(430)} {
    padding: 60px;
  }
`;
export const Text = styled.p`
  font-size: 3rem;
  line-height: 4.6rem;
  font-weight: 300;

  ${max(430)} {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;
export const ButtonWrap = styled.div`
  margin-top: 30px;
  & button {
    margin-top: 10px;
  }
  & button:first-of-type {
    margin-top: 0;
  }
`;
