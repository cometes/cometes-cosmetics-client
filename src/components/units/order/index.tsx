import Title from "../../commons/parts/title";
import WrapperWidth1000px from "../../commons/parts/wrapper/w1000";
import * as S from "./styles";
import ButtonHeight50px from "../../commons/parts/buttons/height50px";
import ItemWithHeart from "../../commons/parts/item/heart";
import ButtonHeight40px from "../../commons/parts/buttons/height40px";
import { useEffect, useState } from "react";
import { useShopping } from "../../commons/hooks/custom/useShopping";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useFetchRecommendProduct } from "../../commons/hooks/queries/fetchRecommendProduct";
import CollectionItem from "../../commons/parts/item/collection";

export default function Order(props: { isComplete: boolean; data: [] }) {
  const { onClickPurchase } = useShopping();
  const { onClickMoveToPage } = useMoveToPage();
  const [shoppingData, setShoppingData] = useState({
    name: "",
    phone: "",
    address: "",
    detailAddress: "",
    addressCode: "",
    point: 0,
    list: [],
    shoppingId: [],
    priceSum: 0,
    sum: 0
  });
  const [orderNumber, setOrderNumber] = useState("");
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    const sessionStorage = globalThis?.sessionStorage;
    const data = JSON.parse(sessionStorage.getItem("shoppingData"));
    const result = JSON.parse(sessionStorage.getItem("shoppingResult"));
    const shoppingId = data?.list.map((el: { id: string }) => {
      return el.id;
    });
    const orderNumber = result?.info[0]?.orderNumber;

    setOrderNumber(orderNumber);

    setShoppingData({
      name: data?.name,
      phone: data?.phone,
      address: data?.address,
      detailAddress: data?.detailAddress,
      addressCode: data?.addressCode,
      point: data?.point,
      list: data?.list,
      shoppingId,
      priceSum: data?.priceSum,
      sum: data?.sum
    });

    setRecommendList(props.data);
  }, [props.data]);

  return (
    <>
      {!props.isComplete && <Title title="주문하기" />}
      <WrapperWidth1000px margin="40px">
        {props.isComplete && (
          <S.CompleteWrap>
            <S.CompleteMessage>주문이 완료되었습니다.</S.CompleteMessage>
            <S.CompleteNumberBox>
              <S.CompleteNumber>주문번호: {orderNumber}</S.CompleteNumber>
            </S.CompleteNumberBox>
          </S.CompleteWrap>
        )}
        <S.FlexWrap>
          <S.Article>
            {!props.isComplete && (
              <S.SectionWrap>
                <S.Subtitle>배송지</S.Subtitle>
                <S.ContentWrap>
                  <div>
                    <S.ContentSubText>{shoppingData?.name}</S.ContentSubText>
                    <S.ContentSubTextGrey>
                      {shoppingData?.phone}
                    </S.ContentSubTextGrey>
                    <S.ContentSubText>{`${shoppingData?.address} ${shoppingData?.detailAddress} (${shoppingData?.addressCode})`}</S.ContentSubText>
                  </div>
                  <S.ItemButtonBox>
                    <ButtonHeight40px
                      content="변경하기"
                      color="#fff"
                      background="#111"
                    />
                  </S.ItemButtonBox>
                </S.ContentWrap>
              </S.SectionWrap>
            )}
            {props.isComplete && (
              <S.SectionWrap>
                <S.Subtitle>배송지 정보</S.Subtitle>
                <S.ContentWrap>
                  <div>
                    <S.FlexBox>
                      <S.ProductDesc>받는 분</S.ProductDesc>
                      <p>{shoppingData?.name}</p>
                    </S.FlexBox>
                    <S.FlexBox>
                      <S.ProductDesc>연락처</S.ProductDesc>
                      <p>{shoppingData?.phone}</p>
                    </S.FlexBox>
                    <S.FlexBox>
                      <S.ProductDesc>주소</S.ProductDesc>
                      <p>
                        {`${shoppingData?.address} ${shoppingData?.detailAddress} (${shoppingData?.addressCode})`}
                      </p>
                    </S.FlexBox>
                  </div>
                </S.ContentWrap>
              </S.SectionWrap>
            )}
            <S.SectionWrap>
              <S.Subtitle>주문상품</S.Subtitle>
              <S.ProductWrap>
                <S.TableWrap>
                  <S.TabWrap>
                    <S.Tab>상품정보</S.Tab>
                    <S.Tab>수량</S.Tab>
                    <S.Tab>상품금액</S.Tab>
                  </S.TabWrap>
                  {shoppingData?.list?.map(el => (
                    <S.RowWrap>
                      <S.RowBox>
                        <S.ItemBox className="info">
                          <S.ItemInfoWrap>
                            <S.ItemImg src={el.product.thumbnail} />
                            <S.ItemInfoBox>
                              <S.ItemName>{el.product.name}</S.ItemName>
                              {el.option !== "none" && (
                                <S.ItemOptionBox>
                                  <S.ItemOption>
                                    옵션 | {el.option}
                                  </S.ItemOption>
                                </S.ItemOptionBox>
                              )}
                            </S.ItemInfoBox>
                          </S.ItemInfoWrap>
                        </S.ItemBox>
                      </S.RowBox>
                      <S.RowBox>
                        <S.ItemBox className="bgCell">
                          <S.MobileCategory>주문수량</S.MobileCategory>
                          <S.ItemStrongText>{el.count}개</S.ItemStrongText>
                        </S.ItemBox>
                      </S.RowBox>
                      <S.RowBox>
                        <S.ItemBox className="pTop">
                          <S.MobileCategory>상품금액</S.MobileCategory>
                          <S.ItemStrongText>
                            {(el.count * el.product.price).toLocaleString()}P
                          </S.ItemStrongText>
                        </S.ItemBox>
                      </S.RowBox>
                    </S.RowWrap>
                  ))}
                </S.TableWrap>
              </S.ProductWrap>
            </S.SectionWrap>
            {!props.isComplete && (
              <S.SectionWrap>
                <S.Subtitle>내 포인트</S.Subtitle>
                <S.ContentWrap>
                  <div>
                    <S.ContentSubText>보유</S.ContentSubText>
                    <S.ItemStrongText>
                      {shoppingData?.point?.toLocaleString()}P
                    </S.ItemStrongText>
                  </div>
                  <S.ItemButtonBox>
                    <ButtonHeight40px
                      content="충전하기"
                      color="#fff"
                      background="#111"
                      onClick={onClickMoveToPage("/mypage/point/deposit/")}
                    />
                  </S.ItemButtonBox>
                </S.ContentWrap>
              </S.SectionWrap>
            )}
            {props.isComplete && (
              <S.SectionWrap className="full">
                <S.Subtitle>함께 볼만한 상품을 추천드려요!</S.Subtitle>
                <S.GridWrap>
                  {props.data?.map(el => (
                    <CollectionItem data={el} />
                  ))}
                </S.GridWrap>
              </S.SectionWrap>
            )}
            {!props.isComplete && (
              <S.SubmitButtonWrap className="full">
                <S.ContentSubText>
                  주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                </S.ContentSubText>
                <S.SubmitButtonBox>
                  <ButtonHeight50px
                    content={`${shoppingData?.list?.length}개 상품 구매하기`}
                    color="#fff"
                    background="#111"
                    onClick={onClickPurchase(shoppingData)}
                  />
                </S.SubmitButtonBox>
              </S.SubmitButtonWrap>
            )}
          </S.Article>
          <S.Aside className="sticky">
            <S.SectionWrap>
              <S.Subtitle>최종 결제정보</S.Subtitle>
              <S.AsideWrap>
                <S.AsideBox>
                  <S.AsideTitle>총 상품금액</S.AsideTitle>
                  <S.AsideText>
                    {shoppingData?.priceSum?.toLocaleString()}P
                  </S.AsideText>
                </S.AsideBox>
                <S.AsideBox>
                  <S.AsideTitle>총 배송비</S.AsideTitle>
                  <S.AsideText>+ 4,000P</S.AsideText>
                </S.AsideBox>
                <S.AsideBox>
                  <S.AsideTitle>총 할인금액</S.AsideTitle>
                  <S.AsideText>0P</S.AsideText>
                </S.AsideBox>
                <S.AsideBox className="strong">
                  <S.AsideTitle>결제금액</S.AsideTitle>
                  <S.AsideText>
                    {shoppingData?.sum?.toLocaleString()}P
                  </S.AsideText>
                </S.AsideBox>
              </S.AsideWrap>
            </S.SectionWrap>
          </S.Aside>
          {!props.isComplete && (
            <S.SubmitButtonWrap className="w1000">
              <S.ContentSubText>
                주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
              </S.ContentSubText>
              <S.SubmitButtonBox>
                <ButtonHeight50px
                  content={`${shoppingData?.list?.length}개 상품 구매하기`}
                  color="#fff"
                  background="#111"
                  onClick={onClickPurchase(shoppingData)}
                />
              </S.SubmitButtonBox>
            </S.SubmitButtonWrap>
          )}
          {props.isComplete && (
            <S.SectionWrap className="w1000">
              <S.Subtitle>함께 볼만한 상품을 추천드려요!</S.Subtitle>
              <S.GridWrap>
                {props.data?.map(el => (
                  <CollectionItem data={el} />
                ))}
              </S.GridWrap>
            </S.SectionWrap>
          )}
        </S.FlexWrap>
      </WrapperWidth1000px>
    </>
  );
}
