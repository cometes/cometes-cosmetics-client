import CollectionAside from "../../slider/collection/aside";
import * as S from "./style";

export default function CollectionWrap(props) {
  return (
    <S.FlexWrap>
      <S.AsideWrap>
        <S.AsideBox>
          <CollectionAside data={props.data?.aside} />
        </S.AsideBox>
        <S.AsideImg src={props.data?.horizontal} />
      </S.AsideWrap>
      <S.Wrapper color={props.color}>{props.children}</S.Wrapper>
    </S.FlexWrap>
  );
}
