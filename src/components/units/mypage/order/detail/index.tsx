import ButtonHeight30px from "../../../../commons/parts/buttons/height30px";
import ButtonHeight50px from "../../../../commons/parts/buttons/height50px";
import Title from "../../../../commons/parts/title";
import WrapperWidth800px from "../../../../commons/parts/wrapper/w800";
import * as S from "./style";
import * as T from "../../../../commons/parts/table/style";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";

export default function OrderDetail() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Title title="주문 상세정보" />
      <WrapperWidth800px>
        <S.SectionWrap>
          <S.Subtitle>주문 번호</S.Subtitle>
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
        </S.SectionWrap>
        <S.SectionWrap>
          <S.Subtitle>주문상품</S.Subtitle>

          <S.TableWrap>
            <S.TabWrap>
              <S.Tab>상품정보</S.Tab>
              <S.Tab>수량</S.Tab>
              <S.Tab>주문금액</S.Tab>
              <S.Tab>상태</S.Tab>
            </S.TabWrap>
            <S.RowWrap>
              <S.RowBox>
                <S.ItemBox className="info">
                  <S.ItemInfoWrap>
                    <S.ItemImg />
                    <S.ItemInfoBox>
                      <p>파우더키스 립스틱</p>
                      <S.ItemOptionBox>
                        <S.ItemOption>옵션 | 저스트 큐리어스</S.ItemOption>
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
              <S.RowBox>
                <S.ItemBox className="status">
                  <S.ItemStatus>결제완료</S.ItemStatus>
                  <S.ButtonFlex>
                    <S.ItemButtonBox>
                      <S.OptionBtn>배송조회</S.OptionBtn>
                    </S.ItemButtonBox>
                    <S.ItemButtonBox>
                      <S.OptionBtn className="line">리뷰작성</S.OptionBtn>
                    </S.ItemButtonBox>
                  </S.ButtonFlex>
                </S.ItemBox>
              </S.RowBox>
            </S.RowWrap>
          </S.TableWrap>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.Subtitle>배송지 정보</S.Subtitle>
          <S.ProductWrap>
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
          </S.ProductWrap>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.Subtitle>결제 정보</S.Subtitle>
          <S.ProductWrap>
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
          </S.ProductWrap>
        </S.SectionWrap>
        <S.ListButtonWrap>
          <S.ListButtonBox>
            <ButtonHeight50px
              content="목록"
              color="#fff"
              background="#111"
              onClick={onClickMoveToPage("/mypage/order/list/")}
            />
          </S.ListButtonBox>
        </S.ListButtonWrap>
      </WrapperWidth800px>
    </>
  );
}
