import styled from "@emotion/styled";
import { useMoveToPage } from "../../../../hooks/custom/useMoveToPage";
import { useRouter } from "next/router";

const ItemImgBox = styled.div`
  background: #f7f7f7;
  aspect-ratio: 3 / 4;
  display: flex;
  align-items: center;
  position: relative;
`;
const ItemImg = styled.img`
  display: block;
  width: 100%;
  cursor: pointer;
`;
const ItemHeartBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemHeartIcon = styled.i`
  display: block;
  font-size: 3rem;
  line-height: 3rem;
  color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #d86565;
  }
`;
const ItemTagBox = styled.div`
  display: flex;
  margin-top: 20px;
`;
const ItemTag = styled.span`
  display: block;
  color: #a0a0a0;
  font-size: 1.4rem;
  margin-left: 10px;

  &:first-of-type {
    margin-left: 0;
  }
`;
const ItemTitle = styled.p`
  margin-top: 6px;
  font-size: 1.8rem;
  cursor: pointer;
`;
const ItemColorBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
const ItemColorIcon = styled.span<{
  background: string;
}>`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.background};
`;
const ItemColorEllipsis = styled.span`
  display: block;
  margin-left: 6px;
`;
const ItemPrice = styled.p`
  margin-top: 10px;
  font-size: 1.8rem;
`;

export default function ProductsItemDefault(props) {
  const colorArr = props.data?.color.slice(0, 5);
  const { onClickMoveToPage } = useMoveToPage();
  const routerStr = props.data?.title.replace(/\s/g, "-");

  return (
    <div>
      <ItemImgBox
        onClick={onClickMoveToPage(`/products/lip/item/${routerStr}`)}
      >
        <ItemImg src={props.data?.img} />
        <ItemHeartBox>
          <ItemHeartIcon className="fi fi-rs-heart" />
        </ItemHeartBox>
      </ItemImgBox>
      <ItemTagBox>
        {props.data?.tag.map(el => (
          <ItemTag>#{el}</ItemTag>
        ))}
      </ItemTagBox>
      <ItemTitle>{props.data?.title}</ItemTitle>
      <ItemColorBox>
        {colorArr.map(el => (
          <ItemColorIcon background={el.code} />
        ))}
        {props.data?.color.length > 5 && (
          <ItemColorEllipsis>⋯</ItemColorEllipsis>
        )}
      </ItemColorBox>
      <ItemPrice>₩ {props.data?.price}</ItemPrice>
    </div>
  );
}
