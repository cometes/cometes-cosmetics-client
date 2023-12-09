import { Image } from "antd";
import * as S from "./style";
import { fallback } from "../../../../../commons/libraries/fallback";
export default function ItemWithHeart() {
  return (
    <S.Wrapper>
      {new Array(4).fill(1).map(el => (
        <S.ItemWrap>
          <S.ItemImgBox>
            <S.HeartBox>
              <S.Heart className="fi fi-ss-heart" />
            </S.HeartBox>
            <Image
              width={"100%"}
              preview={false}
              fallback={fallback}
              src="https://storage.googleapis.com/cometes-storage/thumbnail/LIP/%ED%8C%8C%EC%9A%B0%EB%8D%94%ED%82%A4%EC%8A%A4%20%EB%A6%BD%EC%8A%A4%ED%8B%B1.png"
            />
          </S.ItemImgBox>
          <S.ItemTitle>파우더키스 립스틱</S.ItemTitle>
          <S.ItemPrice>100,000 P</S.ItemPrice>
        </S.ItemWrap>
      ))}
    </S.Wrapper>
  );
}
