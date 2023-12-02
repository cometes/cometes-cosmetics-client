import ButtonHeight30px from "../../../../commons/parts/buttons/height30px";
import ButtonHeight50px from "../../../../commons/parts/buttons/height50px";
import Title from "../../../../commons/parts/title";
import WrapperWidth800px from "../../../../commons/parts/wrapper/w800";
import * as S from "./style";
import * as T from "../../../../commons/parts/table/style";

export default function OrderDetail() {
  return (
    <WrapperWidth800px>
      <Title title="주문 상세정보" />
      <T.SectionWrap>
        <T.Subtitle>주문 번호</T.Subtitle>
        <S.OrderInfoWrap>
          <S.OrderInfoBox>
            <S.OrderInfoCategory>주문일자 : </S.OrderInfoCategory>
            <S.OrderInfoText>2023. 11. 11</S.OrderInfoText>
          </S.OrderInfoBox>
          <S.OrderInfoBox>
            <S.OrderInfoCategory>주문번호 : </S.OrderInfoCategory>
            <S.OrderInfoText>111111111111</S.OrderInfoText>
          </S.OrderInfoBox>
        </S.OrderInfoWrap>
      </T.SectionWrap>
      <T.SectionWrap>
        <T.Subtitle>주문상품</T.Subtitle>
        <T.ProductWrap>
          <T.TableWrap>
            <thead>
              <tr>
                <T.TableTab>상품</T.TableTab>
                <T.TableTab>수량</T.TableTab>
                <T.TableTab>주문금액</T.TableTab>
                <T.TableTab>상태</T.TableTab>
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
                    <T.ItemStrongText>100,000 P</T.ItemStrongText>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemButtonBox>
                      <ButtonHeight30px
                        content="배송조회"
                        color="#fff"
                        background="#111"
                      />
                      <ButtonHeight30px
                        content="리뷰작성"
                        color="#666"
                        background="transparent"
                        border="1px solid #aaa"
                      />
                    </T.ItemButtonBox>
                  </T.ItemBox>
                </td>
              </T.TableRow>
            </T.TableBody>
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
                    <T.ItemStrongText>100,000 P</T.ItemStrongText>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemButtonBox>
                      <ButtonHeight30px
                        content="배송조회"
                        color="#fff"
                        background="#111"
                      />
                      <ButtonHeight30px
                        content="리뷰작성"
                        color="#666"
                        background="transparent"
                        border="1px solid #aaa"
                      />
                    </T.ItemButtonBox>
                  </T.ItemBox>
                </td>
              </T.TableRow>
            </T.TableBody>
          </T.TableWrap>
        </T.ProductWrap>
      </T.SectionWrap>
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
      <T.SectionWrap>
        <T.Subtitle>결제 정보</T.Subtitle>
        <T.ProductWrap>
          <S.ProductBox>
            <S.JustifyBox>
              <S.ProductDesc>총 상품 금액</S.ProductDesc>
              <p>100,000P</p>
            </S.JustifyBox>
            <S.JustifyBox>
              <S.ProductDesc>총 배송비</S.ProductDesc>
              <p>+ 4,000P</p>
            </S.JustifyBox>
            <S.JustifyBox>
              <S.ProductDesc>총 할인 금액</S.ProductDesc>
              <p>0P</p>
            </S.JustifyBox>
            <S.JustifyBox>
              <strong>결제금액</strong>
              <S.ProductStrong>104,000P</S.ProductStrong>
            </S.JustifyBox>
          </S.ProductBox>
        </T.ProductWrap>
      </T.SectionWrap>
      <S.ListButtonWrap>
        <S.ListButtonBox>
          <ButtonHeight50px content="목록" color="#fff" background="#111" />
        </S.ListButtonBox>
      </S.ListButtonWrap>
    </WrapperWidth800px>
  );
}
