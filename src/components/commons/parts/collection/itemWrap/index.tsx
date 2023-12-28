import CollectionItem from "../../item/collection";
import * as S from "./style";
import * as C from "../style";

export default function CollectionItemWrap(props) {
  return (
    <S.CollectionSection>
      <C.Container>
        <S.CollectionSubTitle>{props.data?.mainSubTitle}</S.CollectionSubTitle>
        <S.CollectionTitle>{props.data?.mainTitle}</S.CollectionTitle>
        <S.CollectionContent>{props.data?.mainContent}</S.CollectionContent>
      </C.Container>
      <S.CollectionContainer>
        <S.GridWrap>
          {props.data?.mainItem.map(el => (
            <CollectionItem data={el} />
          ))}
        </S.GridWrap>
      </S.CollectionContainer>
    </S.CollectionSection>
  );
}
