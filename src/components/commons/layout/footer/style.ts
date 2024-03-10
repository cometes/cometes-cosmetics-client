import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { max } from "../../../../commons/libraries/breakPoints";

export const Wrapper = styled.footer<{
  isCollection: boolean;
  isAll: boolean;
}>`
  margin-top: ${props => (props.isCollection ? "0" : "180px")};
  width: 100%;
  padding: 40px 0;
  background-color: #111;
  color: #fff;

  ${max(1215)} {
    margin-top: ${props => (props.isAll ? "0" : "180px")};
  }
`;
export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;

  ${max(1455)} {
    width: 100%;
    padding: 0 40px;
  }
  ${max(768)} {
    padding: 0 24px;
  }
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  ${max(815)} {
    flex-direction: column-reverse;
  }
`;
export const FlexBox = styled.div`
  display: flex;
`;
export const FooterContentBox = styled.div`
  ${max(815)} {
    margin-top: 40px;
  }
`;
export const FooterTitle = styled.p`
  font-size: 2.4rem;
  margin-top: 24px;

  &.cs {
    text-decoration: underline;
  }
  ${max(1015)} {
    font-size: 2rem;
  }
  ${max(815)} {
    font-size: 1.6rem;
  }
`;
export const FooterContent = styled.div`
  line-height: 2.2rem;
  margin-top: 24px;
`;
export const FooterList = styled.li`
  margin-top: 20px;

  &:first-of-type {
    margin-top: 0;
  }
`;
export const FooterItem = styled.a`
  display: block;
  cursor: pointer;
  font-size: 3rem;
  color: #fff;
`;
export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  ${max(815)} {
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
export const FooterIconBox = styled.a`
  display: block;
  margin-left: 30px;
  &:first-of-type {
    margin-left: 0;
  }
`;
export const FooterIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;

  cursor: pointer;
  color: #fff;

  ${max(1015)} {
    font-size: 2.4rem;
  }
`;
