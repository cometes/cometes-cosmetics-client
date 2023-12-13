import * as S from "./style";
import * as T from "../table/style";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";

export default function Process(props: { active?: boolean }) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <T.SectionWrap className="mTop50">
      <T.FlexBox>
        <T.Subtitle>주문/배송 조회</T.Subtitle>
        <T.MoreButtonBox active={props.active}>
          <T.MoreButtonText onClick={onClickMoveToPage("/mypage/order/list/")}>
            더보기
          </T.MoreButtonText>
          <T.MoreButtonIcon icon={faChevronRight} />
        </T.MoreButtonBox>
      </T.FlexBox>
      <S.ProcessWrap>
        <div>
          <S.ProcessTitle>결제완료</S.ProcessTitle>
          <S.ProcessText className="active">2</S.ProcessText>
        </div>
        <S.ProcessIcon icon={faChevronRight} />
        <div>
          <S.ProcessTitle>배송준비</S.ProcessTitle>
          <S.ProcessText>0</S.ProcessText>
        </div>
        <S.ProcessIcon icon={faChevronRight} />
        <div>
          <S.ProcessTitle>배송중</S.ProcessTitle>
          <S.ProcessText>0</S.ProcessText>
        </div>
        <S.ProcessIcon icon={faChevronRight} />
        <div>
          <S.ProcessTitle>배송완료</S.ProcessTitle>
          <S.ProcessText>0</S.ProcessText>
        </div>
        <S.ProcessIcon icon={faChevronRight} />
        <div>
          <S.ProcessTitle>구매확정</S.ProcessTitle>
          <S.ProcessText>0</S.ProcessText>
        </div>
      </S.ProcessWrap>
    </T.SectionWrap>
  );
}
