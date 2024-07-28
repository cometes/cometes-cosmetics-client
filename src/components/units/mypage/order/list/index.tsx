import Title from "../../../../commons/parts/title";
import WrapperWidth800px from "../../../../commons/parts/wrapper/w800";
import Process from "../../../../commons/parts/process";
import * as S from "./style";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import ButtonHeight40px from "../../../../commons/parts/buttons/height40px";
import { useEffect, useState } from "react";
import { getDate2 } from "../../../../../commons/libraries/getDate";

export default function OrderList(props) {
  const { onClickMoveToPage } = useMoveToPage();

  const [list, setList] = useState([]);

  useEffect(() => {
    const arr = Object.keys(props.listData?.list).map(date => {
      return { date: date, list: props.listData?.list[date] };
    });
    setList(arr);
  }, [props.listData?.list]);

  return (
    <>
      <Title title="마이 쇼핑" />
      <WrapperWidth800px>
        <Process />
        {list?.map(el => (
          <S.ProductWrap>
            <S.ProductTitleWrap>
              <S.ProductTitleBox>
                <S.ProductDate>{getDate2(el.date)}</S.ProductDate>
                <S.ProductTitle>주문 {el.list.length}건</S.ProductTitle>
              </S.ProductTitleBox>
              <S.ProductTitleBox
                onClick={onClickMoveToPage(
                  `/mypage/order/${el.list[1].orderId}`
                )}
              >
                <S.ProductDetail>주문 상세</S.ProductDetail>
                <S.ProductDetailIcon className="fi fi-rr-angle-small-right" />
              </S.ProductTitleBox>
            </S.ProductTitleWrap>
            <S.ProductListWrap>
              {el.list.map(item => (
                <S.ProductList>
                  <S.ListStatus>결제완료</S.ListStatus>
                  <S.ListWrap>
                    <S.ListInfoWrap>
                      <S.ItemImage src={item.thumbnail} />
                      <S.ListInfoBox>
                        <p>{item.name}</p>
                        {item.option !== "none" && (
                          <S.ItemOption>옵션 | {item.option}</S.ItemOption>
                        )}
                        <S.ItemOption>
                          {item.price?.toLocaleString()}P · {item.count}개
                        </S.ItemOption>
                      </S.ListInfoBox>
                    </S.ListInfoWrap>
                    <S.ListButton>
                      <ButtonHeight40px content="리뷰작성" />
                    </S.ListButton>
                  </S.ListWrap>
                </S.ProductList>
              ))}
            </S.ProductListWrap>
          </S.ProductWrap>
        ))}
      </WrapperWidth800px>
    </>
  );
}
