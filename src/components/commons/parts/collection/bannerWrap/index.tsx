import * as S from "./style";
import * as C from "../style";

export default function CollectionBannerWrap(props) {
  return (
    <C.CollectionSection>
      <C.Container>
        <C.CollectionTitle>{props.data?.bannerTitle}</C.CollectionTitle>
        <C.CollectionContent>{props.data?.bannerContent}</C.CollectionContent>
      </C.Container>
      <S.FullImgBox>
        <S.ImgDescWrap>
          {props.data?.bannerItem.map((el: string) => (
            <S.ImgDescBox>
              <S.ImgDesc>{el}</S.ImgDesc>
            </S.ImgDescBox>
          ))}
        </S.ImgDescWrap>
        <picture>
          <source
            srcSet="https://storage.googleapis.com/cometes-storage/collection/lisa/lisa-item2.webp"
            media="(max-width: 768px)"
          />
          <source srcSet={props.data?.bannerImg} media="(min-width: 768px)" />
          <S.FullImg />
        </picture>
      </S.FullImgBox>
    </C.CollectionSection>
  );
}
