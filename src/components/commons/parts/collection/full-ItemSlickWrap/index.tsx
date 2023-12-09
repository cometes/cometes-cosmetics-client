import * as S from "./style";
import * as C from "../style";
import CollectionItemSlick from "../../slider/collection/item";
import ArrowWrap from "../videoWrap/arrow";
import { useSlickArrow } from "../../../hooks/custom/useSlickArrow";

export default function CollectionFullItemSlickWrap(props) {
  const { sliderRef, previous, next } = useSlickArrow();
  return (
    <S.FullSection background={props.data?.fullBackground}>
      <C.Container>
        <C.CollectionTitle
          className="highlight"
          highlight={props.data?.highlight}
        >
          {props.data?.fullTitle}
        </C.CollectionTitle>
        <S.GridWrap>
          <ArrowWrap
            item={true}
            highlight={props.data?.highlight}
            previous={previous}
            next={next}
          />
          <CollectionItemSlick
            data={props.data?.fullItem}
            highlight={props.data?.highlight}
            sliderRef={sliderRef}
          />
        </S.GridWrap>
      </C.Container>
    </S.FullSection>
  );
}
