import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import * as S from "./style";

export default function CollectionFlexWrap(props) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.FlexSection>
      <S.LeftWrap>
        <S.SquareImg src={props.data?.flexImg[0]} className="idx0" />
        <S.ItemWrap
          className="left"
          background={props.data?.itemWrap[0].background}
        >
          <S.ItemTitle>{props.data?.itemWrap[0].content}</S.ItemTitle>
          <S.ItemTextButton
            onClick={onClickMoveToPage(props.data?.itemWrap[0].url)}
          >
            VIEW MORE
          </S.ItemTextButton>
        </S.ItemWrap>
        <S.SquareImg src={props.data?.flexImg[1]} className="idx1" />
      </S.LeftWrap>
      <S.MiddleWrap>
        <S.MainImg src={props.data?.mainImg} />
      </S.MiddleWrap>
      <S.RightWrap>
        <S.SquareImg src={props.data?.flexImg[2]} className="idx2" />
        <S.ItemWrap
          className="right"
          background={props.data?.itemWrap[1].background}
        >
          <S.ItemTitle>{props.data?.itemWrap[1].content}</S.ItemTitle>
          <S.ItemTextButton
            onClick={onClickMoveToPage(props.data?.itemWrap[1].url)}
          >
            VIEW MORE
          </S.ItemTextButton>
        </S.ItemWrap>
        <S.SquareImg src={props.data?.flexImg[3]} className="idx3" />
      </S.RightWrap>
    </S.FlexSection>
  );
}
