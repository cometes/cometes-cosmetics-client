import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import ButtonHeight40px from "../../../commons/parts/buttons/height40px";
import RoundBorderButton from "../../../commons/parts/buttons/roundBorder";
import Title from "../../../commons/parts/title";
import WrapperWidth800px from "../../../commons/parts/wrapper/w800";
import * as S from "./style";

export default function Point() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <Title title={"내 포인트"} />
      <WrapperWidth800px>
        <S.PointWrap>
          <div>
            <S.PointText>사용 가능한 포인트</S.PointText>
            <S.PointAmount>
              0<S.PointMark>P</S.PointMark>
            </S.PointAmount>
          </div>
          <div>
            <ButtonHeight40px
              content="포인트 충전하기"
              background="#111"
              color="#fff"
              onClick={onClickMoveToPage("/mypage/point/deposit/")}
            />
          </div>
        </S.PointWrap>
        <S.TabWrap>
          <RoundBorderButton content="전체" background="#2C333A" color="#fff" />
          <RoundBorderButton
            content="충전"
            background="#fff"
            border="2px solid #efefef"
            color="#949494"
          />
          <RoundBorderButton
            content="사용"
            background="#fff"
            border="2px solid #efefef"
            color="#949494"
          />
        </S.TabWrap>
        <S.ListWrap>
          <S.ListBox>
            <S.ListLeft>
              <S.ItemBox className="date">
                <S.Date>2023. 11. 11</S.Date>
              </S.ItemBox>
              <S.ItemBox className="order">
                <S.Payment>주문 사용</S.Payment>
                <S.Order>
                  파우더키스 립스틱 외 1개 상품파우더키스 립스틱 외 1개
                  상품파우더키스 립스틱 외 1개 상품파우더키스 립스틱 외 1개
                  상품파우더키스 립스틱 외 1개 상품
                </S.Order>
              </S.ItemBox>
            </S.ListLeft>
            <S.ListRight>
              <S.ItemBox>
                <S.Amount className="minus">
                  -100000
                  <S.Currency className="minus">P</S.Currency>
                </S.Amount>
              </S.ItemBox>
            </S.ListRight>
          </S.ListBox>
          <S.ListBox>
            <S.ListLeft>
              <S.ItemBox>
                <S.Date>2023. 11. 11</S.Date>
              </S.ItemBox>
              <S.ItemBox>
                <S.Payment>카카오페이</S.Payment>
                <S.Order className="plus">100000 원</S.Order>
              </S.ItemBox>
            </S.ListLeft>
            <S.ListRight>
              <S.ItemBox>
                <S.Amount className="plus">
                  +100000
                  <S.Currency className="plus">P</S.Currency>
                </S.Amount>
              </S.ItemBox>
            </S.ListRight>
          </S.ListBox>
        </S.ListWrap>
      </WrapperWidth800px>
    </>
  );
}
