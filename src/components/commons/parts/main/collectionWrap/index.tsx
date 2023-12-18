import { useEffect } from "react";
import { MainContainer, MainTextBtn } from "../../../../units/main/style";
import * as S from "./style";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainCollectionWrap() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <S.CollectionSection>
      <S.CollectionWrap>
        <S.CollectionBanner data-aos="fade-right">
          <S.CollectionBannerImg src="https://storage.googleapis.com/cometes-storage/main/lisa1.webp" />
        </S.CollectionBanner>
        <MainContainer>
          <S.CollectionTextWrap data-aos="fade-up" data-aos-delay="300">
            <S.CollectionTitle>MAC X L Collection</S.CollectionTitle>
            <S.CollectionContent>
              리사가 가장 사랑하는 것에 영감을 받아 탄생한 NEW 컬러와 <br />
              그녀가 좋아하는 맥 아이템으로 가득한 새로운 리미티드 컬렉션을
              소개합니다.
            </S.CollectionContent>
            <MainTextBtn>view more</MainTextBtn>
          </S.CollectionTextWrap>
        </MainContainer>
      </S.CollectionWrap>
      <S.CollectionWrap>
        <MainContainer>
          <S.CollectionBanner data-aos="fade-up">
            <S.CollectionBannerImg src="https://storage.googleapis.com/cometes-storage/main/pink1.webp" />
          </S.CollectionBanner>
          <S.CollectionTextWrap data-aos="fade-up" data-aos-delay="300">
            <S.CollectionTitle>Re:Think Pink Collection</S.CollectionTitle>
            <S.CollectionContent>
              모두의 마음 속엔 핑크가 있다!
              <br />맥 총알 립스틱의 다양한 텍스쳐와 피니쉬로 당신의 핑크 드림을
              펼쳐보세요.
            </S.CollectionContent>
            <MainTextBtn>view more</MainTextBtn>
          </S.CollectionTextWrap>
        </MainContainer>
      </S.CollectionWrap>
      <S.CollectionWrap>
        <MainContainer>
          <S.CollectionBannerWrap>
            <S.CollectionBanner data-aos="fade-right">
              <S.CollectionDeco
                className="left"
                color={"#a8dbff"}
                data-aos-delay="300"
                data-aos="fade-right"
              >
                HOLIDAY
              </S.CollectionDeco>
              <S.CollectionBannerImg
                src="https://storage.googleapis.com/cometes-storage/main/holiday1.webp"
                className="vertical left"
              />
            </S.CollectionBanner>
            <S.CollectionBanner data-aos="fade-left">
              <S.CollectionDeco
                className="right"
                color={"#a8dbff"}
                data-aos-delay="300"
                data-aos="fade-left"
              >
                Collection
              </S.CollectionDeco>
              <S.CollectionBannerImg
                src="https://storage.googleapis.com/cometes-storage/main/holiday2.webp"
                className="vertical right"
              />
            </S.CollectionBanner>
          </S.CollectionBannerWrap>
          <S.CollectionTextWrap
            className="vertical"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <S.CollectionTitle>2023 MAC Holiday Collection</S.CollectionTitle>
            <S.CollectionContent>
              새하얀 눈과 얼음으로 뒤덮여 보석처럼 반짝이는 은빛의 한정판
              컬렉션을 지금 바로 만나보세요!
            </S.CollectionContent>
            <MainTextBtn>view more</MainTextBtn>
          </S.CollectionTextWrap>
        </MainContainer>
      </S.CollectionWrap>
    </S.CollectionSection>
  );
}
