import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import RoundBorderButton from "../../../commons/parts/buttons/roundBorder";
import Title from "../../../commons/parts/title";
import * as S from "./style";

export default function Point() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.Container>
        <Title title={"내 포인트"} />
        <S.TabWrap>
          <RoundBorderButton
            content="충전 내역"
            background="#111"
            color="#fff"
          />
          <RoundBorderButton
            content="사용 내역"
            background="#fff"
            border="2px solid #efefef"
            color="#949494"
          />
        </S.TabWrap>
        <S.PointWrap>
          <div>
            <S.PointText>사용 가능한 포인트</S.PointText>
            <S.PointAmount>
              0<S.PointMark>P</S.PointMark>
            </S.PointAmount>
          </div>
          <RoundBorderButton
            content="포인트 충전하기"
            background="#111"
            color="#fff"
            onClick={onClickMoveToPage("/mypage/point/deposit/")}
          />
        </S.PointWrap>
        <S.ListWrap>
          <S.ListBox>
            <S.ListLeft>
              <S.Date>2023. 11. 11</S.Date>
              <div>
                <S.Payment>카카오페이</S.Payment>
                <S.Amount>
                  100000
                  <S.Currency>원</S.Currency>
                </S.Amount>
              </div>
            </S.ListLeft>
            <S.ListRight>
              <S.Amount>
                +100000
                <S.Currency>P</S.Currency>
              </S.Amount>
            </S.ListRight>
          </S.ListBox>
        </S.ListWrap>
      </S.Container>
    </S.Wrapper>
  );
}
