import styled from "@emotion/styled";
import { max } from "../../../../../commons/libraries/breakPoints";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";

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
  height: 100%;
  object-fit: contain;
  object-position: 50% 50%;
  aspect-ratio: 1 / 1;
`;
const ItemTitle = styled.p<{
  highlight?: string;
}>`
  color: #666;
  text-transform: uppercase;
  padding: 0 8px;
  margin-top: 12px;
  word-break: keep-all;

  color: ${props => props.highlight};
`;

export default function CollectionItem(props) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <ImgBox
        onClick={onClickMoveToPage(
          `/products/${props.data?.mainCategory?.toLowerCase()}/${props.data?.subCategory?.toLowerCase()}/item/${
            props.data.id
          }`
        )}
      >
        <Item src={props.data?.thumbnail} />
      </ImgBox>
      <ItemTitle highlight={props.highlight}>{props.data?.name}</ItemTitle>
    </Wrapper>
  );
}
