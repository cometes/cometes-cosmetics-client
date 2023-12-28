import styled from "@emotion/styled";
import { max } from "../../../../../../commons/libraries/breakPoints";

const ItemImgBox = styled.div<{
  idx: number;
}>`
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  aspect-ratio: ${props => (props.idx > 3 ? "3 / 4" : "1 / 1")};
  cursor: pointer;

  ${max(915)} {
    aspect-ratio: 3 / 4;
  }
`;
const ItemImg = styled.img<{
  idx: number;
}>`
  display: block;
  width: ${props => (props.idx > 3 ? "100%" : "80%")};
  height: 100%;
  object-fit: contain;
  object-position: 50% 50%;
  aspect-ratio: 1 / 1;

  ${max(915)} {
    width: 100%;
  }
`;
const NumberBox = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Number = styled.span`
  display: block;
  font-size: 3.6rem;
  font-family: "AritaBuri";

  ${max(500)} {
    font-size: 3rem;
  }
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
  height: 3rem;
  color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #d86565;
  }

  ${max(500)} {
    font-size: 2.4rem;
    height: 2.4rem;
  }
`;
const ItemContentBox = styled.div`
  padding: 0 8px;
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

export default function ProductsItemBest(props) {
  const colorArr = props.data?.color.slice(0, 5);

  return (
    <div>
      <ItemImgBox idx={props.idx}>
        <ItemImg src={props.data?.img} idx={props.idx} />
        <NumberBox>
          <Number>{String(props.idx).padStart(2, "0")}</Number>
        </NumberBox>
        <ItemHeartBox>
          <ItemHeartIcon className="fi fi-rs-heart" />
        </ItemHeartBox>
      </ItemImgBox>
      <ItemContentBox>
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
      </ItemContentBox>
    </div>
  );
}
