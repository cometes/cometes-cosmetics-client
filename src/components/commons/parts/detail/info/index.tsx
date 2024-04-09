import WrapperWidth1000px from "../../wrapper/w1000";
import * as S from "./style";

export default function DetailInfo(props) {
  const info = [
    {
      category: "제품명",
      content: props.data.name
    },
    {
      category: "용량",
      content: props.data.weight
    },
    {
      category: "제품주요사양",
      content: props.data.type
    },
    {
      category: "사용기한",
      content: props.data.useBy
    },
    {
      category: "사용방법",
      content: props.data.method
    },
    {
      category: "제조국",
      content: props.data.origin
    },
    {
      category: "책임판매업자",
      content: props.data.seller
    },
    {
      category: "주요성분",
      content: props.data.ingredient
    },
    {
      category: "식품의약품안전처 심사필 유무",
      content: props.data.certification
    },
    {
      category: "사용시 주의 사항",
      content: props.data.cautions
    },
    {
      category: "품질보증기준",
      content: props.data.qualityGuarantee
    }
  ];

  return (
    <>
      <WrapperWidth1000px>
        <S.ProductInfoWrap onClick={props.onClickInfo} ref={props.infoRef}>
          <S.ProductInfoFlex>
            <S.ProductInfoTitle>상품 정보/전성분 안내</S.ProductInfoTitle>
            <S.ProductInfoSub>
              본 상품정보는 [공정거래위원회의 전자상거래 등에서의 상품정보제공
              고시]에 따라 작성되었습니다.
            </S.ProductInfoSub>
          </S.ProductInfoFlex>
          <S.ProductInfoIcon
            className={
              props.isInfoOn
                ? "fi fi-rr-angle-small-up"
                : "fi fi-rr-angle-small-down"
            }
          />
        </S.ProductInfoWrap>
      </WrapperWidth1000px>
      <S.ProductInfoBox className={props.isInfoOn ? "active" : ""}>
        <S.ProductInfoContainer>
          {info.map(el => (
            <S.ProductInfoFlexBox>
              <S.ProductInfoCategory>{el.category}</S.ProductInfoCategory>
              <S.ProductInfoContent>{el.content}</S.ProductInfoContent>
            </S.ProductInfoFlexBox>
          ))}
        </S.ProductInfoContainer>
      </S.ProductInfoBox>
    </>
  );
}
