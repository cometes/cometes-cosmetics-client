import { useEffect, useState } from "react";
import { getDate2 } from "../../../../commons/libraries/getDate";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import ButtonHeight40px from "../../../commons/parts/buttons/height40px";
import RoundBorderButton from "../../../commons/parts/buttons/roundBorder";
import Title from "../../../commons/parts/title";
import WrapperWidth800px from "../../../commons/parts/wrapper/w800";
import * as S from "./style";
import { useFetchPayment } from "../../../commons/hooks/queries/fetchPayment";
import { useRouter } from "next/router";
import { useAccessToken } from "../../../commons/hooks/custom/useAccessToken";

export default function Point(props) {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const [tab, setTab] = useState("전체");
  const [list, setList] = useState([]);
  const tabConvert: { [key: string]: string } = {
    전체: "ALL",
    충전: "FILL",
    사용: "USE"
  };

  const { accessToken } = useAccessToken();

  useEffect(() => {
    setList(props.listData?.list.reverse());
  }, [props.listData?.list]);

  const onClickPointTab = (tab: string) => async () => {
    setTab(tab);

    try {
      const result = await useFetchPayment(tabConvert[tab], accessToken);
      setList(result.data.list);
    } catch (error) {
      setList([]);
    }
  };

  const onClickChargeBtn = () => {
    const storage = globalThis?.sessionStorage;
    storage.setItem("prevPoint", props.listData?.point);
    router.push("/mypage/point/deposit/");
  };

  return (
    <>
      <Title title={"내 포인트"} />
      <WrapperWidth800px>
        <S.PointWrap>
          <div>
            <S.PointText>사용 가능한 포인트</S.PointText>
            <S.PointAmount>
              {(props.listData?.point).toLocaleString()}
              <S.PointMark>P</S.PointMark>
            </S.PointAmount>
          </div>
          <div>
            <ButtonHeight40px
              content="포인트 충전하기"
              background="#111"
              color="#fff"
              onClick={onClickChargeBtn}
            />
          </div>
        </S.PointWrap>
        <S.TabWrap>
          <RoundBorderButton
            content="전체"
            background={tab === "전체" ? "#2C333A" : "#fff"}
            color={tab === "전체" ? "#fff" : "#949494"}
            border={tab === "전체" ? "" : "2px solid #efefef"}
            onClick={onClickPointTab("전체")}
          />
          <RoundBorderButton
            content="충전"
            background={tab === "충전" ? "#2C333A" : "#fff"}
            color={tab === "충전" ? "#fff" : "#949494"}
            border={tab === "충전" ? "" : "2px solid #efefef"}
            onClick={onClickPointTab("충전")}
          />
          <RoundBorderButton
            content="사용"
            background={tab === "사용" ? "#2C333A" : "#fff"}
            color={tab === "사용" ? "#fff" : "#949494"}
            border={tab === "사용" ? "" : "2px solid #efefef"}
            onClick={onClickPointTab("사용")}
          />
        </S.TabWrap>
        <S.ListContainer>
          <S.ListWrap>
            {/* <S.ListBox>
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
            </S.ListBox> */}
            {list[0] === undefined && (
              <S.EmptyText>내역이 없습니다.</S.EmptyText>
            )}
            {list.map(el => (
              <S.ListBox>
                <S.ListLeft>
                  <S.ItemBox>
                    <S.Date>{getDate2(el.createdAt)}</S.Date>
                  </S.ItemBox>
                  <S.ItemBox>
                    <S.Payment>
                      {el.status === "PAYMENT" ? "카카오페이" : "상품 구매"}
                    </S.Payment>
                    <S.Order className="plus">
                      {el.amount.toLocaleString()} 원
                    </S.Order>
                  </S.ItemBox>
                </S.ListLeft>
                <S.ListRight>
                  <S.ItemBox>
                    <S.Amount
                      className={el.status === "PAYMENT" ? "plus" : "minus"}
                    >
                      {el.status === "PAYMENT" ? "+" : "-"}
                      {el.amount.toLocaleString()}
                      <S.Currency
                        className={el.status === "PAYMENT" ? "plus" : "minus"}
                      >
                        P
                      </S.Currency>
                    </S.Amount>
                  </S.ItemBox>
                </S.ListRight>
              </S.ListBox>
            ))}
          </S.ListWrap>
        </S.ListContainer>
      </WrapperWidth800px>
    </>
  );
}
