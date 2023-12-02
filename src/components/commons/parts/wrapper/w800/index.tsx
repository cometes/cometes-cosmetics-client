import styled from "@emotion/styled";
import { mq } from "../../../../../commons/libraries/breakPoints";

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Container = styled.div`
  width: 800px;

  ${mq.medium} {
    width: 100%;
    padding: 0 40px;
  }
`;

export default function WrapperWidth800px(props) {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
}
