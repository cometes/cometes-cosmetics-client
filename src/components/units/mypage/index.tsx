import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Process from "../../commons/parts/process";
import * as T from "../../commons/parts/table/style";
import WrapperWidth1000px from "../../commons/parts/wrapper/w1000";
import * as S from "./style";
import DivideLine from "../../commons/parts/divideLine";
import ItemWithHeart from "../../commons/parts/item/heart";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";

export default function Mypage() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <WrapperWidth1000px>
      <S.FlexWrap>
        <S.Aside>
          <S.Title>마이 페이지</S.Title>
          <S.NavBox>
            <S.NavList>
              <S.NavItem onClick={onClickMoveToPage("/mypage/order/list/")}>
                주문/배송 조회
              </S.NavItem>
            </S.NavList>
            <S.NavList>
              <S.NavItem onClick={onClickMoveToPage("/mypage/cart/")}>
                장바구니
              </S.NavItem>
            </S.NavList>
            <S.NavList>
              <S.NavItem onClick={onClickMoveToPage("/mypage/point/")}>
                내 포인트
              </S.NavItem>
            </S.NavList>
          </S.NavBox>
        </S.Aside>
        <S.Article>
          <section>
            <S.UserWrap>
              <S.UserGrade>LOVER 핑크</S.UserGrade>
              <S.UserText>전혜원님 반갑습니다.</S.UserText>
            </S.UserWrap>
            <S.UserWrap className="border">
              <S.FlexBox>
                <S.UserCategory>내 포인트</S.UserCategory>
                <S.UserStrong>1,000,000</S.UserStrong>
                <S.UserSubText>P</S.UserSubText>
              </S.FlexBox>
              <S.FlexBox>
                <S.UserCategory>내 쿠폰</S.UserCategory>
                <S.UserStrong>0</S.UserStrong>
                <S.UserSubText>개</S.UserSubText>
              </S.FlexBox>
            </S.UserWrap>
          </section>
          <Process active={true} />
          <T.SectionWrap className="mTop50">
            <T.FlexBox>
              <T.Subtitle>장바구니</T.Subtitle>
              <T.MoreButtonBox active={true}>
                <T.MoreButtonText onClick={onClickMoveToPage("/mypage/cart/")}>
                  더보기
                </T.MoreButtonText>
                <T.MoreButtonIcon icon={faChevronRight} />
              </T.MoreButtonBox>
            </T.FlexBox>
            <DivideLine border="2px solid #111" margin="0 0 30px 0" />
            <ItemWithHeart />
          </T.SectionWrap>
        </S.Article>
      </S.FlexWrap>
    </WrapperWidth1000px>
  );
}
