import Title from "../../../../commons/parts/title";
import WrapperWidth800px from "../../../../commons/parts/wrapper/w800";
import Process from "../../../../commons/parts/process";
import * as S from "./style";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";

export default function OrderList() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Title title="마이 쇼핑" />
      <WrapperWidth800px>
        <Process />
        <S.ProductWrap>
          <S.TableWrap>
            <S.TabWrap>
              <S.Tab>주문일자</S.Tab>
              <S.Tab>상품정보</S.Tab>
              <S.Tab>수량</S.Tab>
              <S.Tab>주문금액</S.Tab>
              <S.Tab>상태</S.Tab>
            </S.TabWrap>
            <S.RowWrap>
              <S.RowBox>
                <S.ItemBox className="pTop date">
                  <S.MobileCategory>주문일자 : </S.MobileCategory>
                  <S.ItemOptionBox>
                    <p>2023. 11. 11</p>
                    <S.ItemTextButton
                      onClick={onClickMoveToPage("/mypage/order/111/")}
                    >
                      상세보기
                    </S.ItemTextButton>
                  </S.ItemOptionBox>
                </S.ItemBox>
              </S.RowBox>
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
            <S.RowWrap>
              <S.RowBox>
                <S.ItemBox className="pTop date">
                  <S.MobileCategory>주문일자 : </S.MobileCategory>
                  <S.ItemOptionBox>
                    <p>2023. 11. 11</p>
                    <S.ItemTextButton>상세보기</S.ItemTextButton>
                  </S.ItemOptionBox>
                </S.ItemBox>
              </S.RowBox>
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
        </S.ProductWrap>
      </WrapperWidth800px>
    </>
  );
}
