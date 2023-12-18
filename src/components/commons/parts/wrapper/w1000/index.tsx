import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";
import { ReactChild, ReactFragment, ReactPortal } from "react";

const Wrapper = styled.div<{
  margin: string;
}>`
  margin-top: 80px;
  margin-top: ${props => props.margin};
`;
const Container = styled.div`
  width: 1000px;
  margin: 0 auto;

  ${max(1015)} {
    width: 100%;
    padding: 0 40px;
  }
  ${max(768)} {
    padding: 0 24px;
  }
`;

interface WrapperProps {
  margin?: string;
  children: boolean | ReactChild | ReactFragment | ReactPortal;
}

export default function WrapperWidth1000px(props: WrapperProps) {
  return (
    <Wrapper margin={props.margin}>
      <Container>{props.children}</Container>
    </Wrapper>
  );
}
