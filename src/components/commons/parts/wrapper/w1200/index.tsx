import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

const Wrapper = styled.div`
  margin-top: 100px;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

  ${max(1215)} {
    width: 100%;
    padding: 0 40px;
  }
  ${max(768)} {
    padding: 0 24px;
  }

`;

export default function WrapperWidth1200px(props) {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
}
