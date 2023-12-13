import Title from "../../commons/parts/title";
import WrapperWidth1000px from "../../commons/parts/wrapper/w1000";
import * as S from "./styles";
import * as T from "../../commons/parts/table/style";
import ButtonHeight50px from "../../commons/parts/buttons/height50px";
import ButtonHeight30px from "../../commons/parts/buttons/height30px";
import ItemWithHeart from "../../commons/parts/item/heart";

export default function Order(props: { isComplete: boolean }) {

  return (
    <WrapperWidth1000px>
      {props.isComplete && (
        <S.CompleteWrap>
          <S.CompleteMessage>주문이 완료되었습니다.</S.CompleteMessage>
          <S.CompleteNumberBox>
            <S.CompleteNumber>주문번호: 111111111111111</S.CompleteNumber>
          </S.CompleteNumberBox>
        </S.CompleteWrap>
      )}
      {!props.isComplete && <Title title="주문하기" />}
      <S.FlexWrap>
        <S.Article>
          {!props.isComplete && (
            <T.SectionWrap>
              <T.Subtitle>배송지</T.Subtitle>
              <S.ContentWrap>
                <div>
                  <S.ContentSubText>전혜원</S.ContentSubText>
                  <S.ContentSubTextGrey>010 7556 4661</S.ContentSubTextGrey>
                  <S.ContentSubText>
                    경기도 수원시 장안구 율전로 73 어쩌구저쩌구 아파트 111-1111
                    (11111)
                  </S.ContentSubText>
                </div>
                <T.ItemButtonBox>
                  <ButtonHeight30px
                    content="변경하기"
                    color="#fff"
                    background="#111"
                  />
                </T.ItemButtonBox>
              </S.ContentWrap>
            </T.SectionWrap>
          )}
          {props.isComplete && (
            <T.SectionWrap>
              <T.Subtitle>배송지 정보</T.Subtitle>
              <T.ProductWrap>
                <S.ProductBox>
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
                </S.ProductBox>
              </T.ProductWrap>
            </T.SectionWrap>
          )}
          <T.SectionWrap>
            <T.Subtitle>주문상품</T.Subtitle>
            <T.ProductWrap>
              <T.TableWrap>
                <thead>
                  <tr>
                    <T.TableTab>상품정보</T.TableTab>
                    <T.TableTab>수량</T.TableTab>
                    <T.TableTab>구매가</T.TableTab>
                  </tr>
                </thead>
                <T.TableBody>
                  <T.TableRow>
                    <td>
                      <T.ItemBox>
                        <T.ItemInfoWrap>
                          <T.ItemImg />
                          <T.ItemInfoBox>
                            <p>파우더키스 립스틱</p>
                            <T.ItemOption>옵션 | 저스트 큐리어스</T.ItemOption>
                          </T.ItemInfoBox>
                        </T.ItemInfoWrap>
                      </T.ItemBox>
                    </td>
                    <td>
                      <T.ItemBox className="column">
                        <T.ItemStrongText>1개</T.ItemStrongText>
                      </T.ItemBox>
                    </td>
                    <td>
                      <T.ItemBox className="column">
                        <T.ItemStrongText>100,000P</T.ItemStrongText>
                      </T.ItemBox>
                    </td>
                  </T.TableRow>
                </T.TableBody>
              </T.TableWrap>
            </T.ProductWrap>
          </T.SectionWrap>
          {!props.isComplete && (
            <T.SectionWrap>
              <T.Subtitle>내 포인트</T.Subtitle>
              <S.ContentWrap>
                <div>
                  <S.ContentSubText>보유</S.ContentSubText>
                  <T.ItemStrongText>1,000,000,000P</T.ItemStrongText>
                </div>
                <T.ItemButtonBox>
                  <ButtonHeight30px
                    content="충전하기"
                    color="#fff"
                    background="#111"
                  />
                </T.ItemButtonBox>
              </S.ContentWrap>
            </T.SectionWrap>
          )}
          {props.isComplete && (
            <T.SectionWrap>
              <T.Subtitle>함께 볼만한 상품을 추천드려요!</T.Subtitle>
              <ItemWithHeart />
            </T.SectionWrap>
          )}
          {!props.isComplete && (
            <S.SubmitButtonWrap>
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
          <T.SectionWrap>
            <T.Subtitle>최종 결제정보</T.Subtitle>
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
          </T.SectionWrap>
        </S.Aside>
      </S.FlexWrap>
    </WrapperWidth1000px>
  );
}
