import * as S from "./style";
import * as C from "../style";
import CollectionItemSlick from "../../slider/collection/item";
import { useSlickArrow } from "../../../hooks/custom/useSlickArrow";
import ArrowWrap from "../videoWrap/arrow";

export default function CollectionItemSlickWrap(props) {
  const { sliderRef, previous, next } = useSlickArrow();
  return (
    <C.CollectionSection className="mTop100">
      <C.Container>
        <C.CollectionSubTitle>{props.data?.mainSubTitle}</C.CollectionSubTitle>
        <C.CollectionTitle>{props.data.mainTitle}</C.CollectionTitle>
        <C.CollectionContent>{props.data.mainContent}</C.CollectionContent>
        <S.GridWrap>
          <ArrowWrap
            color={props.color}
            previous={previous}
            next={next}
            item={true}
          />
          <CollectionItemSlick
            data={props.listData?.data}
            color={props.color}
            sliderRef={sliderRef}
          />
        </S.GridWrap>
      </C.Container>
    </C.CollectionSection>
  );
}
