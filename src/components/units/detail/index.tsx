import DetailSlick from "../../commons/parts/slider/detail";
import * as S from "./style";
import RoundBorderButton from "../../commons/parts/buttons/roundBorder";
import { useDetail } from "../../commons/hooks/custom/useDetail";
import DetailInfo from "../../commons/parts/detail/info";
import DetailReview from "../../commons/parts/detail/review";
import { Tooltip } from "antd";
import { useShopping } from "../../commons/hooks/custom/useShopping";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductsDetail(props) {
  const router = useRouter();
  const {
    onClickInfo,
    isInfoOn,
    isReviewDetailOn,
    categories,
    currentOption,
    onClickColorCategory,
    onClickColorIcon,
    onClickClear,
    onClickRef,
    onClickReviewDetail,
    colorCategory,
    filtered,
    colorIcon,
    infoRef,
    reviewRef
  } = useDetail(props.detailData);

  const { onClickAdd } = useShopping({ data: { list: [] } });

  return (
    <>
      <S.Wrapper>
        <S.LeftWrap>
          <S.LeftAside>
            <DetailSlick
              data={props.detailData?.gallery}
              selected={colorIcon}
            />
          </S.LeftAside>
        </S.LeftWrap>
        <S.RightWrap>
          <S.RightBox>
            <S.CategoryWrap>
              <S.CategoryTitle>Products</S.CategoryTitle>
              <S.CategoryIcon className="fi fi-rr-angle-small-right" />
              <S.CategoryTitle>
                {props.detailData?.mainCategory}
              </S.CategoryTitle>
              <S.CategoryIcon className="fi fi-rr-angle-small-right" />
              <S.CategoryTitle>{props.detailData?.subCategory}</S.CategoryTitle>
            </S.CategoryWrap>
            <S.ProductSection>
              <S.ProductTitleWrap>
                <S.ProductTitle>{`${props.detailData?.name} ${props.detailData?.weight}`}</S.ProductTitle>
                <S.ProductTitle>{props.detailData?.engName}</S.ProductTitle>
              </S.ProductTitleWrap>
              <S.ProductPriceWrap>
                <S.ProductPrice>
                  {Number(props.detailData?.price).toLocaleString()}
                </S.ProductPrice>
                <S.ProductCurrency>원</S.ProductCurrency>
              </S.ProductPriceWrap>
              <S.ProductTagWrap>
                {props.detailData?.tag?.map(el => (
                  <S.ProductTag>#{el.tag}</S.ProductTag>
                ))}
              </S.ProductTagWrap>
              {props.detailData.color[0].icon !== "" && (
                <S.ProductColorWrap>
                  <S.ColorCategoryWrap>
                    <S.ColorCategory
                      className={colorCategory === "" ? "active" : ""}
                      onClick={onClickColorCategory("")}
                    >
                      전체
                    </S.ColorCategory>
                    {categories.map(el => (
                      <S.ColorCategory
                        onClick={onClickColorCategory(el)}
                        className={colorCategory === el ? "active" : ""}
                      >
                        {el}
                      </S.ColorCategory>
                    ))}
                  </S.ColorCategoryWrap>
                  <S.ColorIconWrap>
                    {filtered?.map(el => (
                      <Tooltip title={el.name} placement="bottom">
                        <S.ColorIconBox
                          className={el.name === colorIcon.name ? "active" : ""}
                          onClick={onClickColorIcon(el)}
                        >
                          <S.ColorIcon src={el.icon} code={el.code} />
                        </S.ColorIconBox>
                      </Tooltip>
                    ))}
                  </S.ColorIconWrap>
                  {colorIcon.code && (
                    <S.CurrentColorWrap>
                      <S.CurrentColorBox>
                        <S.CurrentColorIcon code={colorIcon.code} />
                        <S.CurrentColorText code={colorIcon.code}>
                          {colorIcon.name}
                        </S.CurrentColorText>
                      </S.CurrentColorBox>
                      <S.CurrentColorDesc>{colorIcon.desc}</S.CurrentColorDesc>
                      <S.ClearBox onClick={onClickClear}>
                        <S.ClearIcon className="fi fi-rr-cross-circle" />
                        <S.ClearText>Clear</S.ClearText>
                      </S.ClearBox>
                    </S.CurrentColorWrap>
                  )}
                </S.ProductColorWrap>
              )}

              <S.ProductContent>{props.detailData?.summary}</S.ProductContent>
              <S.ProductButtonWrap>
                <S.ProductButtonBox>
                  <RoundBorderButton
                    content="장바구니 담기"
                    background="#222"
                    color="#fff"
                    onClick={() =>
                      onClickAdd(String(router.query.id), currentOption)
                    }
                  />
                </S.ProductButtonBox>
                <S.ProductButtonBox>
                  <RoundBorderButton
                    content="바로 구매하기"
                    background="transparent"
                    color="#4F4F4F"
                    border="2px solid #d6d6d6"
                  />
                </S.ProductButtonBox>
              </S.ProductButtonWrap>
            </S.ProductSection>
          </S.RightBox>
          <S.DetailSection>
            <S.DetailTabWrap>
              <S.DetailTab className="active">상세 페이지</S.DetailTab>
              <S.DetailTab onClick={onClickRef(infoRef)}>
                전성분 · 상품정보
              </S.DetailTab>
              <S.DetailTab onClick={onClickRef(reviewRef)}>리뷰</S.DetailTab>
            </S.DetailTabWrap>
            <S.ContentBox>
              <S.DetailContent src={props.detailData?.content} />
            </S.ContentBox>
          </S.DetailSection>
        </S.RightWrap>
      </S.Wrapper>
      <DetailInfo
        isInfoOn={isInfoOn}
        onClickInfo={onClickInfo}
        infoRef={infoRef}
        data={props.detailData?.info}
      />
      <DetailReview
        reviewRef={reviewRef}
        onClickReviewDetail={onClickReviewDetail}
        isReviewDetailOn={isReviewDetailOn}
      />
    </>
  );
}
