import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mq } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.footer`
  margin-top: 180px;
  width: 100%;
  padding: 40px 0;
  background-color: #111;
  color: #fff;
`;
export const Container = styled.div`
  width: 1620px;
  margin: 0 auto;
  padding: 0 80px;

  ${mq.XXlarge} {
    width: 100%;
    padding: 0 40px;
  }
  ${mq.medium} {
  }
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  ${mq.medium} {
    flex-direction: column-reverse;
  }
`;
export const FlexBox = styled.div`
  display: flex;
`;
export const FooterContentBox = styled.div`
  ${mq.medium} {
    margin-top: 40px;
  }
`;
export const FooterTitle = styled.p`
  font-size: 2.4rem;
  margin-top: 24px;

  &.cs {
    text-decoration: underline;
  }
  ${mq.w1000} {
    font-size: 2rem;
  }
  ${mq.medium} {
    font-size: 1.6rem;
  }
`;
export const FooterContent = styled.div`
  line-height: 2.2rem;
  margin-top: 24px;
`;
export const FooterList = styled.li`
  font-size: 3rem;
  margin-top: 20px;
  cursor: pointer;
  &:first-of-type {
    margin-top: 0;
  }
`;
export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  ${mq.medium} {
    flex-direction: column-reverse;
  }
`;
export const FooterAddress = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #999;
  margin-top: 16px;
  word-break: keep-all;
`;
export const FooterIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin-left: 30px;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }

  ${mq.w1000} {
    font-size: 2.4rem;
  }
`;
