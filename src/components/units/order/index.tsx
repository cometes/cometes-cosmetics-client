import Title from "../../commons/parts/title";
import WrapperWidth1000px from "../../commons/parts/wrapper/w1000";
import * as S from "./styles";
import * as T from "../../commons/parts/table/style";
import ButtonHeight50px from "../../commons/parts/buttons/height50px";
import ButtonHeight30px from "../../commons/parts/buttons/height30px";
import ItemWithHeart from "../../commons/parts/item/heart";
import ButtonHeight40px from "../../commons/parts/buttons/height40px";

export default function Order(props: { isComplete: boolean }) {
  return (
    <>
      {!props.isComplete && <Title title="주문하기" />}
      <WrapperWidth1000px margin="40px">
        {props.isComplete && (
          <S.CompleteWrap>
            <S.CompleteMessage>주문이 완료되었습니다.</S.CompleteMessage>
            <S.CompleteNumberBox>
              <S.CompleteNumber>주문번호: 111111111111111</S.CompleteNumber>
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
                    <S.ContentSubText>전혜원</S.ContentSubText>
                    <S.ContentSubTextGrey>010 7556 4661</S.ContentSubTextGrey>
                    <S.ContentSubText>
                      경기도 수원시 장안구 율전로 73 어쩌구저쩌구 아파트
                      111-1111 (11111)
                    </S.ContentSubText>
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
                      <p>전혜원</p>
                    </S.FlexBox>
                    <S.FlexBox>
                      <S.ProductDesc>연락처</S.ProductDesc>
                      <p>010 7556 4661</p>
                    </S.FlexBox>
                    <S.FlexBox>
                      <S.ProductDesc>주소</S.ProductDesc>
                      <p>
                        경기도 수원시 장안구 율전로 73 <br />
                        어쩌구저쩌구아파트 111 - 1111
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
                  <S.RowWrap>
                    <S.RowBox>
                      <S.ItemBox className="info">
                        <S.ItemInfoWrap>
                          <S.ItemImg />
                          <S.ItemInfoBox>
                            <p>파우더키스 립스틱</p>
                            <S.ItemOptionBox>
                              <S.ItemOption>
                                옵션 | 저스트 큐리어스
                              </S.ItemOption>
                            </S.ItemOptionBox>
                          </S.ItemInfoBox>
                        </S.ItemInfoWrap>
                      </S.ItemBox>
                    </S.RowBox>
                    <S.RowBox>
                      <S.ItemBox className="bgCell">
                        <S.MobileCategory>주문수량</S.MobileCategory>
                        <S.ItemStrongText>1개</S.ItemStrongText>
                      </S.ItemBox>
                    </S.RowBox>
                    <S.RowBox>
                      <S.ItemBox className="pTop">
                        <S.MobileCategory>상품금액</S.MobileCategory>
                        <S.ItemStrongText>100,000P</S.ItemStrongText>
                      </S.ItemBox>
                    </S.RowBox>
                  </S.RowWrap>
                </S.TableWrap>
              </S.ProductWrap>
            </S.SectionWrap>
            {!props.isComplete && (
              <S.SectionWrap>
                <S.Subtitle>내 포인트</S.Subtitle>
                <S.ContentWrap>
                  <div>
                    <S.ContentSubText>보유</S.ContentSubText>
                    <S.ItemStrongText>1,000,000,000P</S.ItemStrongText>
                  </div>
                  <S.ItemButtonBox>
                    <ButtonHeight40px
                      content="충전하기"
                      color="#fff"
                      background="#111"
                    />
                  </S.ItemButtonBox>
                </S.ContentWrap>
              </S.SectionWrap>
            )}
            {props.isComplete && (
              <S.SectionWrap className="full">
                <S.Subtitle>함께 볼만한 상품을 추천드려요!</S.Subtitle>
                <ItemWithHeart />
              </S.SectionWrap>
            )}
            {!props.isComplete && (
              <S.SubmitButtonWrap className="full">
                <S.ContentSubText>
                  주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                </S.ContentSubText>
                <S.SubmitButtonBox>
                  <ButtonHeight50px
                    content="2개 상품 구매하기"
                    color="#fff"
                    background="#111"
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
                  <S.AsideText>100,000P</S.AsideText>
                </S.AsideBox>
                <S.AsideBox>
                  <S.AsideTitle>총 배송비</S.AsideTitle>
                  <S.AsideText>+ 4000P</S.AsideText>
                </S.AsideBox>
                <S.AsideBox>
                  <S.AsideTitle>총 할인금액</S.AsideTitle>
                  <S.AsideText>0P</S.AsideText>
                </S.AsideBox>
                <S.AsideBox className="strong">
                  <S.AsideTitle>결제금액</S.AsideTitle>
                  <S.AsideText>104,000P</S.AsideText>
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
                  content="2개 상품 구매하기"
                  color="#fff"
                  background="#111"
                />
              </S.SubmitButtonBox>
            </S.SubmitButtonWrap>
          )}
          {props.isComplete && (
            <S.SectionWrap className="w1000">
              <S.Subtitle>함께 볼만한 상품을 추천드려요!</S.Subtitle>
              <ItemWithHeart />
            </S.SectionWrap>
          )}
        </S.FlexWrap>
      </WrapperWidth1000px>
    </>
  );
}
