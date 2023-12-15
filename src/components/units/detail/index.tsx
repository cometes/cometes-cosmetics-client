import DetailSlick from "../../commons/parts/slider/detail";
import * as S from "./style";
import { lipArr } from "../../../commons/libraries/array";
import RoundBorderButton from "../../commons/parts/buttons/roundBorder";
import { useDetail } from "../../commons/hooks/custom/useDetail";
import DetailInfo from "../../commons/parts/detail/info";
import DetailReview from "../../commons/parts/detail/review";
import { Tooltip } from "antd";

export default function ProductsDetail() {
  const {
    onClickInfo,
    isInfoOn,
    categories,
    onClickColorCategory,
    onClickColorIcon,
    onClickClear,
    colorCategory,
    filtered,
    colorIcon
  } = useDetail(lipArr);

  return (
    <>
      <S.Wrapper>
        <S.LeftWrap>
          <S.LeftAside>
            <DetailSlick data={lipArr.gallery} selected={colorIcon}/>
          </S.LeftAside>
        </S.LeftWrap>
        <S.RightWrap>
          <S.RightContainer>
            <S.CategoryWrap>
              <S.CategoryTitle>Products</S.CategoryTitle>
              <S.CategoryIcon className="fi fi-rr-angle-small-right" />
              <S.CategoryTitle>립</S.CategoryTitle>
              <S.CategoryIcon className="fi fi-rr-angle-small-right" />
              <S.CategoryTitle>립스틱</S.CategoryTitle>
            </S.CategoryWrap>
            <S.ProductSection>
              <S.ProductTitleWrap>
                <div>
                  <S.ProductTitle>{`${lipArr.title} ${lipArr.weight}`}</S.ProductTitle>
                  <S.ProductTitle>{lipArr.endTitle}</S.ProductTitle>
                </div>
                <S.HeartBox>
                  <S.HeartIcon className="fi fi-rs-heart" />
                </S.HeartBox>
              </S.ProductTitleWrap>
              <S.ProductPriceWrap>
                <S.ProductPrice>
                  {Number(lipArr.price).toLocaleString()}
                </S.ProductPrice>
                <S.ProductCurrency>원</S.ProductCurrency>
              </S.ProductPriceWrap>
              <S.ProductTagWrap>
                {lipArr.tag.map(el => (
                  <S.ProductTag>#{el}</S.ProductTag>
                ))}
              </S.ProductTagWrap>
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
                  {filtered.map(el => (
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
              <S.ProductContent>{lipArr.summary}</S.ProductContent>
              <S.ProductButtonWrap>
                <S.ProductButtonBox>
                  <RoundBorderButton
                    content="장바구니 담기"
                    background="#222"
                    color="#fff"
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
          </S.RightContainer>
          <S.DetailSection>
            <S.DetailTabWrap>
              <S.DetailTab className="active">상세 페이지</S.DetailTab>
              <S.DetailTab>전성분 · 상품정보</S.DetailTab>
              <S.DetailTab>리뷰</S.DetailTab>
            </S.DetailTabWrap>
            <S.RightContainer className="content">
              <S.DetailContent src={lipArr.content} />
            </S.RightContainer>
          </S.DetailSection>
        </S.RightWrap>
      </S.Wrapper>
      <DetailInfo isInfoOn={isInfoOn} onClickInfo={onClickInfo} />
      <DetailReview />
    </>
  );
}
