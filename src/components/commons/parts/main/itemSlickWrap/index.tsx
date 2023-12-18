import {
  MainContainer,
  MainSection,
  MainTitle
} from "../../../../units/main/style";
import { useSlickArrow } from "../../../hooks/custom/useSlickArrow";
import ArrowWrap from "../../collection/videoWrap/arrow";
import CollectionItemSlick from "../../slider/collection/item";
import * as S from "./style";

export default function MainItemSlickWrap(props) {
  const { sliderRef, previous, next } = useSlickArrow();
  return (
    <MainSection>
      <MainContainer>
        <S.TitleBox>
          <MainTitle>{props.title}</MainTitle>
          <ArrowWrap
            color={props.color}
            previous={previous}
            next={next}
            item={false}
          />
        </S.TitleBox>
        <CollectionItemSlick
          data={props.data}
          color={props.color}
          sliderRef={sliderRef}
        />
      </MainContainer>
    </MainSection>
  );
}
