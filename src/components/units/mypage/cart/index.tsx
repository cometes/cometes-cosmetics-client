import { Button, Checkbox, ConfigProvider, InputNumber } from "antd";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import DivideLine from "../../../commons/parts/divideLine";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import WrapperWidth1000px from "../../../commons/parts/wrapper/w1000";
import * as T from "../../../commons/parts/table/style";
import ButtonHeight40px from "../../../commons/parts/buttons/height40px";

export default function Cart() {
  return (
    <WrapperWidth1000px>
      <S.CategoryWrap>
        <S.CategoryTitle>장바구니</S.CategoryTitle>
        <S.CategoryIcon className="fi fi-rr-angle-small-right" />
        <S.CategoryTitle>주문/결제</S.CategoryTitle>
        <S.CategoryIcon className="fi fi-rr-angle-small-right" />
        <S.CategoryTitle>주문완료</S.CategoryTitle>
      </S.CategoryWrap>
      <S.SelectBox>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#111"
            }
          }}
        >
          <Checkbox>모두선택</Checkbox>
        </ConfigProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#111"
            }
          }}
        >
          <Button type="default" icon={<FontAwesomeIcon icon={faTrashCan} />}>
            모두삭제
          </Button>
        </ConfigProvider>
      </S.SelectBox>
      <S.ProductWrap>
        <S.TableWrap>
          <S.TabWrap>
            <S.Tab>상품정보</S.Tab>
            <S.Tab>구매가</S.Tab>
            <S.Tab>수량</S.Tab>
            <S.Tab>배송정보</S.Tab>
            <S.Tab>선택</S.Tab>
          </S.TabWrap>
          <S.RowWrap>
            <S.RowBox>
              <S.ItemBox className="info">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#111"
                    }
                  }}
                >
                  <Checkbox />
                </ConfigProvider>
                <S.ItemInfoWrap className="checkbox">
                  <S.ItemImg />
                  <S.ItemInfoBox>
                    <p>파우더키스 립스틱</p>
                    <S.ItemOptionBox>
                      <S.ItemOption>옵션 | 저스트 큐리어스</S.ItemOption>
                      <S.ItemOptionButton>옵션변경</S.ItemOptionButton>
                    </S.ItemOptionBox>
                  </S.ItemInfoBox>
                </S.ItemInfoWrap>
              </S.ItemBox>
            </S.RowBox>
            <S.RowBox>
              <S.ItemBox className="bgCell">
                <S.MobileCategory>주문수량</S.MobileCategory>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#111"
                    }
                  }}
                >
                  <InputNumber min={1} max={10} defaultValue={1} />
                </ConfigProvider>
              </S.ItemBox>
            </S.RowBox>
            <S.RowBox>
              <S.ItemBox className="pTop">
                <S.MobileCategory>상품금액</S.MobileCategory>
                <S.ItemStrongText>100,000P</S.ItemStrongText>
              </S.ItemBox>
            </S.RowBox>

            <S.RowBox>
              <S.ItemBox>
                <S.ItemSubText>배송비</S.ItemSubText>
                <p>+4000P</p>
              </S.ItemBox>
            </S.RowBox>
            <S.RowBox>
              <S.ItemBox>
                <S.ItemButtonBox>
                  <S.OptionBtn>바로구매</S.OptionBtn>
                </S.ItemButtonBox>
                <S.ItemButtonBox>
                  <S.OptionBtn className="line">삭제하기</S.OptionBtn>
                </S.ItemButtonBox>
              </S.ItemBox>
            </S.RowBox>
          </S.RowWrap>
          <S.RowWrap>
            <S.RowBox>
              <S.ItemBox className="info">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#111"
                    }
                  }}
                >
                  <Checkbox />
                </ConfigProvider>
                <S.ItemInfoWrap className="checkbox">
                  <S.ItemImg />
                  <S.ItemInfoBox>
                    <p>파우더키스 립스틱</p>
                    <S.ItemOptionBox>
                      <S.ItemOption>옵션 | 저스트 큐리어스</S.ItemOption>
                      <S.ItemOptionButton>옵션변경</S.ItemOptionButton>
                    </S.ItemOptionBox>
                  </S.ItemInfoBox>
                </S.ItemInfoWrap>
              </S.ItemBox>
            </S.RowBox>
            <S.RowBox>
              <S.ItemBox className="bgCell">
                <S.MobileCategory>주문수량</S.MobileCategory>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#111"
                    }
                  }}
                >
                  <InputNumber min={1} max={10} defaultValue={1} />
                </ConfigProvider>
              </S.ItemBox>
            </S.RowBox>
            <S.RowBox>
              <S.ItemBox className="pTop">
                <S.MobileCategory>상품금액</S.MobileCategory>
                <S.ItemStrongText>100,000P</S.ItemStrongText>
              </S.ItemBox>
            </S.RowBox>

            <S.RowBox>
              <S.ItemBox>
                <S.ItemSubText>배송비</S.ItemSubText>
                <p>+4000P</p>
              </S.ItemBox>
            </S.RowBox>
            <S.RowBox>
              <S.ItemBox>
                <S.ItemButtonBox>
                  <S.OptionBtn>바로구매</S.OptionBtn>
                </S.ItemButtonBox>
                <S.ItemButtonBox>
                  <S.OptionBtn className="line">삭제하기</S.OptionBtn>
                </S.ItemButtonBox>
              </S.ItemBox>
            </S.RowBox>
          </S.RowWrap>
        </S.TableWrap>
        <DivideLine border="1px solid #ebebeb" />
        <S.ItemTotalWrap>
          <S.ItemTotalBox>
            <p>선택상품금액</p>
            <S.ItemTotalText>100,000P</S.ItemTotalText>
          </S.ItemTotalBox>
          <S.ItemTotalPlus icon={faPlus} />
          <S.ItemTotalBox>
            <p>총 배송비</p>
            <S.ItemTotalText>4,000P</S.ItemTotalText>
          </S.ItemTotalBox>
          <S.ItemTotalBox className="divide vertical">
            <S.ItemStrongText>주문금액</S.ItemStrongText>
            <S.ItemTotalPrice>204,000P</S.ItemTotalPrice>
          </S.ItemTotalBox>
          <S.ItemTotalButton>
            <ButtonHeight40px
              content="2건 주문하기"
              color="#fff"
              background="#111"
            />
          </S.ItemTotalButton>
        </S.ItemTotalWrap>
      </S.ProductWrap>
    </WrapperWidth1000px>
  );
}
