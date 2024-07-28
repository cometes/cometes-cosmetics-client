import * as S from "./style";
import ProductsItemBest from "../../item/products/best";
import { useEffect, useState } from "react";

export default function ProductsBestItemWrap(props) {
  console.log(props.listData.LIP);
  const [list, setList] = useState({ LIP: [], EYE: [], FACE: [] });

  useEffect(() => {
    setList(props.listData);
  }, [props.listData]);

  return (
    <S.ItemContainer>
      <S.ItemSection>
        <S.BestTitle>LIP</S.BestTitle>
        <S.GridWrap>
          {list?.LIP?.map((el, num) => (
            <ProductsItemBest data={el} idx={num + 1} />
          ))}
        </S.GridWrap>
      </S.ItemSection>
      <S.ItemSection>
        <S.BestTitle>EYE</S.BestTitle>
        <S.GridDefaultWrap>
          {list?.EYE?.map((el, num) => (
            <ProductsItemBest data={el} idx={num + 1} />
          ))}
        </S.GridDefaultWrap>
      </S.ItemSection>
      <S.ItemSection>
        <S.BestTitle>FACE</S.BestTitle>
        <S.GridDefaultWrap>
          {list?.FACE?.map((el, num) => (
            <ProductsItemBest data={el} idx={num + 1} />
          ))}
        </S.GridDefaultWrap>
      </S.ItemSection>
    </S.ItemContainer>
  );
}
