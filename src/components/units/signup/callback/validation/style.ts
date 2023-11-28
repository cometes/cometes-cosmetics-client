import styled from "@emotion/styled";
import { mq } from "../../../../../commons/libraries/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  display: block;
  width: 20rem;

  ${mq.mobile} {
    width: 18rem;
  }
`;
export const Container = styled.div`
  background-color: #fff;
  border: 1px solid #e4e5ed;
  padding: 60px 80px;
  margin-top: 30px;
`;
export const Text = styled.p`
  font-size: 3rem;
  line-height: 4.6rem;
  font-weight: 300;
`;
export const InputWrap = styled.div`
  margin-top: 30px;
`;
export const InputCategory = styled.p`
  color: #222;
`;
export const InputBox = styled.div`
  margin-top: 10px;
`;
export const Timer = styled.span`
  font-size: 1.4rem;
  display: block;
  color: #cf1322;
  width: 26px;
`;
export const AddressBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const AddressInputBox = styled.div``;
export const AddressButtonBox = styled.div`
  width: 80px;
`;
export const Error = styled.span`
  display: block;
  color: #e31c1c;
  font-size: 1.4rem;
  margin-top: 6px;
`;
