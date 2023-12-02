import { Button, Checkbox, ConfigProvider, Divider, InputNumber } from "antd";
import Title from "../../../commons/parts/title";
import * as S from "./style";
import ButtonHeight30px from "../../../commons/parts/buttons/height30px";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import DivideLine from "../../../commons/parts/divideLine";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ButtonHeight50px from "../../../commons/parts/buttons/height50px";
import WrapperWidth1000px from "../../../commons/parts/wrapper/w1000";
import * as T from "../../../commons/parts/table/style";

export default function Cart() {
  return (
    <WrapperWidth1000px>
      <Title title="장바구니" />
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
      <T.ProductWrap>
        <T.TableWrap>
          <thead>
            <tr>
              <T.TableTab>상품정보</T.TableTab>
              <T.TableTab>구매가</T.TableTab>
              <T.TableTab>수량</T.TableTab>
              <T.TableTab>배송정보</T.TableTab>
              <T.TableTab>선택</T.TableTab>
            </tr>
          </thead>
          <T.TableBody>
            <T.TableRow>
              <td>
                <T.ItemBox>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#111"
                      }
                    }}
                  >
                    <Checkbox />
                  </ConfigProvider>
                  <T.ItemInfoWrap className="checkbox">
                    <T.ItemImg />
                    <T.ItemInfoBox>
                      <p>파우더키스 립스틱</p>
                      <T.ItemOption>옵션 | 저스트 큐리어스</T.ItemOption>
                      <T.ItemOptionButton>옵션변경</T.ItemOptionButton>
                    </T.ItemInfoBox>
                  </T.ItemInfoWrap>
                </T.ItemBox>
              </td>
              <td>
                <T.ItemBox className="column">
                  <T.ItemStrongText>100,000P</T.ItemStrongText>
                </T.ItemBox>
              </td>
              <td>
                <T.ItemBox className="column">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#111"
                      }
                    }}
                  >
                    <InputNumber min={1} max={10} defaultValue={1} />
                  </ConfigProvider>
                </T.ItemBox>
              </td>
              <td>
                <T.ItemBox className="column">
                  <T.ItemSubText>배송비</T.ItemSubText>
                  <p>+4000P</p>
                </T.ItemBox>
              </td>
              <td>
                <T.ItemBox className="column">
                  <T.ItemButtonBox>
                    <ButtonHeight30px
                      content="바로구매"
                      color="#fff"
                      background="#111"
                    />
                  </T.ItemButtonBox>
                  <T.ItemButtonBox>
                    <ButtonHeight30px
                      border="2px solid #efefef"
                      color="#949494"
                      content="삭제하기"
                      background="transparent"
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
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#111"
                      }
                    }}
                  >
                    <Checkbox />
                  </ConfigProvider>
                  <T.ItemInfoWrap className="checkbox">
                    <T.ItemImg />
                    <T.ItemInfoBox>
                      <p>파우더키스 립스틱</p>
                      <T.ItemOption>옵션 | 저스트 큐리어스</T.ItemOption>
                      <T.ItemOptionButton>옵션변경</T.ItemOptionButton>
                    </T.ItemInfoBox>
                  </T.ItemInfoWrap>
                </T.ItemBox>
              </td>
              <td>
                <T.ItemBox className="column">
                  <T.ItemStrongText>100,000P</T.ItemStrongText>
                </T.ItemBox>
              </td>
              <td>
                <T.ItemBox className="column">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#111"
                      }
                    }}
                  >
                    <InputNumber min={1} max={10} defaultValue={1} />
                  </ConfigProvider>
                </T.ItemBox>
              </td>
              <td>
                <T.ItemBox className="column">
                  <T.ItemSubText>배송비</T.ItemSubText>
                  <p>+4000P</p>
                </T.ItemBox>
              </td>
              <td>
                <T.ItemBox className="column">
                  <T.ItemButtonBox>
                    <ButtonHeight30px
                      content="바로구매"
                      color="#fff"
                      background="#111"
                    />
                  </T.ItemButtonBox>
                  <T.ItemButtonBox>
                    <ButtonHeight30px
                      border="2px solid #efefef"
                      color="#949494"
                      content="삭제하기"
                      background="transparent"
                    />
                  </T.ItemButtonBox>
                </T.ItemBox>
              </td>
            </T.TableRow>
          </T.TableBody>
        </T.TableWrap>
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
            <T.ItemStrongText>주문금액</T.ItemStrongText>
            <S.ItemTotalPrice>204,000P</S.ItemTotalPrice>
          </S.ItemTotalBox>
          <S.ItemTotalButton>
            <ButtonHeight50px
              content="2건 주문하기"
              color="#fff"
              background="#111"
            />
          </S.ItemTotalButton>
        </S.ItemTotalWrap>
      </T.ProductWrap>
    </WrapperWidth1000px>
  );
}
