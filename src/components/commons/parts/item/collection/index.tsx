import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";

const Wrapper = styled.div`
  width: 100%;
`;
const ImgBox = styled.div`
  background-color: #f7f7f7;
  aspect-ratio: 3 / 4;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Item = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
`;
const ItemTitle = styled.p<{
  highlight?: string;
}>`
  color: #666;
  text-transform: uppercase;
  padding: 0 6px;
  margin-top: 12px;
  word-break: keep-all;

  color: ${props => props.highlight};
`;

export default function CollectionItem(props) {
  return (
    <Wrapper>
      <ImgBox>
        <Item src={props.data?.img} />
      </ImgBox>
      <ItemTitle highlight={props.highlight}>{props.data?.title}</ItemTitle>
    </Wrapper>
  );
}
