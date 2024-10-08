import styled from "@emotion/styled";
import { useMoveToPage } from "../../../../hooks/custom/useMoveToPage";
import { useRouter } from "next/router";
import { max } from "../../../../../../commons/libraries/breakPoints";

const ItemImgBox = styled.div`
  background: #f7f7f7;
  aspect-ratio: 3 / 4;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const ItemImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: 50% 50%;
  aspect-ratio: 1 / 1;
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
  z-index: 99;
`;
const ItemHeartIcon = styled.i<{
  active: boolean;
}>`
  display: block;
  font-size: 3rem;
  line-height: 3rem;
  color: ${props => (props.active ? "#d86565" : "#ccc")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #d86565;
  }
`;
const ItemContentBox = styled.div`
  padding: 0 8px;
`;
const ItemTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;
  margin-top: 20px;
`;
const ItemTag = styled.span`
  display: block;
  color: #a0a0a0;
  font-size: 1.4rem;

  ${max(500)} {
    margin-left: 6px;

    &:first-of-type {
      margin-left: 0;
    }
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

  return (
    <div>
      <ItemImgBox>
        <ItemImg
          src={props.data?.thumbnail}
          onClick={onClickMoveToPage(
            `/products/${props.data.mainCategory.toLowerCase()}/${props.data.subCategory.toLowerCase()}/item/${
              props.data.id
            }`
          )}
        />
        <ItemHeartBox>
          <ItemHeartIcon
            className={
              props.data?.isShopping ? "fi fi-ss-heart" : "fi fi-rs-heart"
            }
            active={props.data?.isShopping}
          />
        </ItemHeartBox>
      </ItemImgBox>
      <ItemContentBox>
        <ItemTagBox>
          {props.data?.tag.map(el => (
            <ItemTag>#{el.tag}</ItemTag>
          ))}
        </ItemTagBox>
        <ItemTitle>{props.data?.name}</ItemTitle>
        <ItemColorBox>
          {colorArr.map(el => (
            <ItemColorIcon background={el.code} />
          ))}
          {props.data?.color.length > 5 && (
            <ItemColorEllipsis>⋯</ItemColorEllipsis>
          )}
        </ItemColorBox>
        <ItemPrice>₩ {props.data?.price.toLocaleString()}</ItemPrice>
      </ItemContentBox>
    </div>
  );
}
