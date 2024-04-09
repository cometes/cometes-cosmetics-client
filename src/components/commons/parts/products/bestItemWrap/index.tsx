import * as S from "./style";
import ProductsItemBest from "../../item/products/best";

export default function ProductsBestItemWrap(props) {
  console.log(props.listData.LIP);
  return (
    <S.ItemContainer>
      <S.ItemSection>
        <S.BestTitle>LIP</S.BestTitle>
        <S.GridWrap>
          {props.listData.LIP.map((el, num) => (
            <ProductsItemBest data={el} idx={num + 1} />
          ))}
        </S.GridWrap>
      </S.ItemSection>
      <S.ItemSection>
        <S.BestTitle>EYE</S.BestTitle>
        <S.GridDefaultWrap>
          {props.listData.EYE.map((el, num) => (
            <ProductsItemBest data={el} idx={num + 1} />
          ))}
        </S.GridDefaultWrap>
      </S.ItemSection>
      <S.ItemSection>
        <S.BestTitle>FACE</S.BestTitle>
        <S.GridDefaultWrap>
          {props.listData.FACE.map((el, num) => (
            <ProductsItemBest data={el} idx={num + 1} />
          ))}
        </S.GridDefaultWrap>
      </S.ItemSection>
    </S.ItemContainer>
  );
}
