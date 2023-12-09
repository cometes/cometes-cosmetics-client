import * as S from "./style";
import * as C from "../style";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import { helpArr } from "../../../../../commons/libraries/array";

export default function CollectionHelpWrap(props) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <C.CollectionSection>
      <S.Container>
        <S.HelpTitle>NEED MORE HELP?</S.HelpTitle>
        <S.HelpWrap>
          {helpArr.map(el => (
            <S.HelpBox>
              <S.HelpImg src={el.img} />
              <S.HelpText>{el.title}</S.HelpText>
              <S.HelpContent>{el.content}</S.HelpContent>
              <S.HelpTextBtn onClick={onClickMoveToPage(el.url)}>
                {el.textBtn}
              </S.HelpTextBtn>
            </S.HelpBox>
          ))}
        </S.HelpWrap>
      </S.Container>
    </C.CollectionSection>
  );
}
