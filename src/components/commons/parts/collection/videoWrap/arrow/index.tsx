import styled from "@emotion/styled";
import { max } from "../../../../../../commons/libraries/breakPoints";

export const ArrowBox = styled.div<{
  item: boolean;
}>`
  display: ${props => (props.item ? "none" : "flex")};
  margin-bottom: 10px;
  justify-content: ${props => (props.item ? "flex-end" : "")};

  & button:last-of-type {
    margin-left: 20px;
  }

  ${max(800)} {
    display: flex;
  }
`;
export const Arrow = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
`;
export const ArrowImg = styled.img<{
  color: string;
  highlight: string;
}>`
  display: block;
  width: 48px;
  height: 48px;
  background: #222;
  background: ${props => props.color};
  background: ${props => props.highlight};

  &.prev {
    mask-image: url("/banner/prev.svg");
  }
  &.next {
    mask-image: url("/banner/next.svg");
  }
`;

export default function ArrowWrap(props) {
  return (
    <ArrowBox item={props.item}>
      <Arrow onClick={props.previous}>
        <ArrowImg
          className="prev"
          color={props.color}
          highlight={props.highlight}
        />
      </Arrow>
      <Arrow onClick={props.next}>
        <ArrowImg
          className="next"
          color={props.color}
          highlight={props.highlight}
        />
      </Arrow>
    </ArrowBox>
  );
}
