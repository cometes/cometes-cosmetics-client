import { Button, Checkbox, ConfigProvider, InputNumber, Select } from "antd";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import DivideLine from "../../../commons/parts/divideLine";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import WrapperWidth1000px from "../../../commons/parts/wrapper/w1000";
import ButtonHeight40px from "../../../commons/parts/buttons/height40px";
import { useEffect, useState } from "react";
import { useFetchGetShopping } from "../../../commons/hooks/queries/fetchGetShopping";
import OptionModal from "../../../commons/parts/modal/optionModal";
import { useModal } from "../../../commons/hooks/custom/useModal";
import { useShopping } from "../../../commons/hooks/custom/useShopping";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { wrapAsync } from "../../../../commons/libraries/asyncFunc";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";

export default function Cart(props) {
  const { isModalOpen, handleOk, handleCancel, showModal } = useModal();
  const {
    data,
    optionData,
    defaultOption,
    currentId,
    countArr,
    checkAll,
    indeterminate,
    checkedList,
    sum,
    shoppingList,
    onClickOption,
    onClickOptionChange,
    onClickDelete,
    onClickOrder,
    handleChangeCount,
    onCheckAllChange,
    onChangeCheckList
  } = useShopping(props.listData);

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <OptionModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        optionData={optionData}
        defaultValue={defaultOption}
        currentId={currentId}
        onClickOptionChange={onClickOptionChange}
      />
      {data?.data?.list?.length === 0 && (
        <S.FullWrapper>
          <div>
            <S.FullInfoTitle>장바구니에 담긴 상품이 없습니다.</S.FullInfoTitle>
            <S.FullInfoDesc>
              원하는 상품을 장바구니에 담아보세요!
            </S.FullInfoDesc>
            <ButtonHeight40px
              content="상품 담으러 가기"
              background="#111"
              color="#fff"
              onClick={onClickMoveToPage("/products/all/")}
            />
          </div>
        </S.FullWrapper>
      )}
      {data?.data?.list?.length !== 0 && (
        <S.Wrapper>
          <WrapperWidth1000px>
            <S.CategoryWrap>
              <S.CategoryTitle className="current">장바구니</S.CategoryTitle>
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
                <Checkbox
                  onChange={onCheckAllChange}
                  checked={checkAll}
                  indeterminate={indeterminate}
                >
                  모두선택
                </Checkbox>
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#111"
                  }
                }}
              >
                <Button
                  type="default"
                  icon={<FontAwesomeIcon icon={faTrashCan} />}
                  onClick={onClickDelete(checkedList)}
                >
                  선택삭제
                </Button>
              </ConfigProvider>
            </S.SelectBox>
            <S.ProductWrap>
              <S.TableWrap>
                <S.TabWrap>
                  <S.Tab>상품정보</S.Tab>
                  <S.Tab>수량</S.Tab>
                  <S.Tab>구매가</S.Tab>
                  <S.Tab>배송정보</S.Tab>
                  <S.Tab>선택</S.Tab>
                </S.TabWrap>
                {data?.data?.list?.map(el => (
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
                          <Checkbox
                            onChange={onChangeCheckList(
                              el.id,
                              el.product.price * el.count,
                              el.option
                            )}
                            checked={checkedList.includes(el.id) ? true : false}
                          />
                        </ConfigProvider>
                        <S.ItemInfoWrap className="checkbox">
                          <S.ItemImg src={el.product.thumbnail} />
                          <S.ItemInfoBox>
                            <S.ItemName>{el.product.name}</S.ItemName>
                            {el.option !== "" && (
                              <S.ItemOptionBox>
                                <S.ItemOption>옵션 | {el.option}</S.ItemOption>
                                <S.ItemOptionButton
                                  onClick={() => {
                                    showModal();
                                    onClickOption(
                                      el.productId,
                                      el.option,
                                      el.id
                                    );
                                  }}
                                >
                                  옵션변경
                                </S.ItemOptionButton>
                              </S.ItemOptionBox>
                            )}
                          </S.ItemInfoBox>
                        </S.ItemInfoWrap>
                      </S.ItemBox>
                    </S.RowBox>
                    <S.RowBox>
                      <S.ItemBox className="bgCell">
                        <S.MobileCategory>주문수량</S.MobileCategory>
                        <ConfigProvider
                          theme={{
                            components: {
                              Select: {
                                optionSelectedBg: "#e6f4ff"
                              }
                            },
                            token: {
                              colorPrimary: "#111"
                            }
                          }}
                        >
                          <Select
                            onChange={handleChangeCount(el.id)}
                            defaultValue={el.count}
                            options={countArr}
                          />
                        </ConfigProvider>
                      </S.ItemBox>
                    </S.RowBox>
                    <S.RowBox>
                      <S.ItemBox className="pTop">
                        <S.MobileCategory>상품금액</S.MobileCategory>
                        <S.ItemStrongText>
                          {(el.product.price * el.count).toLocaleString()}P
                        </S.ItemStrongText>
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
                          <S.OptionBtn
                            className="line"
                            onClick={() => {
                              onClickDelete(checkedList);
                            }}
                          >
                            삭제하기
                          </S.OptionBtn>
                        </S.ItemButtonBox>
                      </S.ItemBox>
                    </S.RowBox>
                  </S.RowWrap>
                ))}
              </S.TableWrap>
              <DivideLine border="1px solid #ebebeb" />
              <S.ItemTotalWrap>
                <S.ItemTotalBox>
                  <p>선택상품금액</p>
                  <S.ItemTotalText>
                    {sum?.toLocaleString() ?? 0}P
                  </S.ItemTotalText>
                </S.ItemTotalBox>
                <S.ItemTotalPlus icon={faPlus} />
                <S.ItemTotalBox>
                  <p>총 배송비</p>
                  <S.ItemTotalText>4,000P</S.ItemTotalText>
                </S.ItemTotalBox>
                <S.ItemTotalBox className="divide vertical">
                  <S.ItemStrongText>주문금액</S.ItemStrongText>
                  <S.ItemTotalPrice>
                    {sum === 0 ? 0 : (sum ?? 0 + 4000).toLocaleString()}P
                  </S.ItemTotalPrice>
                </S.ItemTotalBox>
                <S.ItemTotalButton>
                  <ButtonHeight40px
                    onClick={wrapAsync(onClickOrder(shoppingList))}
                    content={`${checkedList?.length ?? 0}건 주문하기`}
                    color="#fff"
                    background="#111"
                  />
                </S.ItemTotalButton>
              </S.ItemTotalWrap>
            </S.ProductWrap>
          </WrapperWidth1000px>
        </S.Wrapper>
      )}
    </>
  );
}
