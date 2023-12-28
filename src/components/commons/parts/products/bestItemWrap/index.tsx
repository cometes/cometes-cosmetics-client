import { lipArr } from "../../../../../commons/libraries/array";
import WrapperWidth1200px from "../../wrapper/w1200";
import * as S from "./style";
import ProductsItemBest from "../../item/products/best";

export default function ProductsBestItemWrap() {
  return (
    <S.ItemContainer>
      <S.ItemSection>
        <S.BestTitle>LIP</S.BestTitle>
        <S.GridWrap>
          {new Array(7).fill(1).map((el, num) => (
            <ProductsItemBest data={lipArr} idx={num + 1} />
          ))}
        </S.GridWrap>
      </S.ItemSection>
      <S.ItemSection>
        <S.BestTitle>EYE</S.BestTitle>
        <S.GridDefaultWrap>
          {new Array(3).fill(1).map((el, num) => (
            <ProductsItemBest data={lipArr} idx={num + 1} />
          ))}
        </S.GridDefaultWrap>
      </S.ItemSection>
      <S.ItemSection>
        <S.BestTitle>FACE</S.BestTitle>
        <S.GridDefaultWrap>
          {new Array(3).fill(1).map((el, num) => (
            <ProductsItemBest data={lipArr} idx={num + 1} />
          ))}
        </S.GridDefaultWrap>
      </S.ItemSection>
    </S.ItemContainer>
  );
}
