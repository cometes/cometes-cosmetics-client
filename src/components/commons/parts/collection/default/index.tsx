import CollectionItem from "../../item/collection";
import * as S from "./style";
import CollectionAside from "../../slider/collection/aside";

export default function CollectionDefault(props) {
  return (
    <S.FlexWrap>
      <S.AsideWrap>
        <S.AsideBox>
          <CollectionAside data={props.data.aside} />
        </S.AsideBox>
        <S.AsideImg src={props.data.horizontal} />
      </S.AsideWrap>
      <S.Wrapper>
        <S.Container>
  
        </S.Container>
      </S.Wrapper>
    </S.FlexWrap>
  );
}
