import Banner from "../../commons/parts/banner";
import WrapperWidth1000px from "../../commons/parts/wrapper/w1000";
import * as S from "./style";

export default function About() {
  return (
    <>
      <Banner src="/collection/about/about.webp" />
      <WrapperWidth1000px>
        <S.AboutSection>
          <S.Title>PROFESSIONAL</S.Title>
          <S.SubTitle>독보적인 전문성</S.SubTitle>
          <S.content>
            맥은 메이크업 기술에서 갖춘 독보적인 전문성 덕분에 전 세계를
            선도하는 프로페셔널 메이크업 권위자로 자리매김했습니다. <br />전
            세계 패션위크의 백스테이지에서 트렌드를 만드는 맥의 아티스트들을
            만나보세요.
          </S.content>
          <S.ImgWrap>
            <S.ContentImg src="/collection/about/left.png" />
            <S.ImgWrap className="col">
              <S.ContentImg src="/collection/about/rightTop.png" />
              <S.ImgWrap className="row">
                <S.ContentImg src="/collection/about/rightBtmLeft.png" />
                <S.ContentImg src="/collection/about/rightBtmRight.png" />
              </S.ImgWrap>
            </S.ImgWrap>
          </S.ImgWrap>
        </S.AboutSection>
        <S.AboutSection>
          <S.Title>INCLUSIVITY AND DIVERSITY</S.Title>
          <S.SubTitle>다양성과 개성</S.SubTitle>
          <S.content>
            맥은 다양성과 개성을 존중하며, 모든 연령, 모든 인종, 모든 젠더를
            지지합니다.
          </S.content>
          <S.ImgWrap>
            <S.ContentImg src="/collection/about/section2.png" />
          </S.ImgWrap>
        </S.AboutSection>
        <S.AboutSection>
          <S.Title>social responsibility</S.Title>
          <S.SubTitle>사회적 책임</S.SubTitle>
          <S.content>
            우리의 목적은 단순한 제품을 넘어서 우리가 살고 있는 커뮤니티와
            지구를 발전시키기 위함입니다. <br /> 전 세계에 미치는 영향력, 수용할
            줄 아는 사회 그리고 더 나은 미래를 위한 변화를 마다하지 않는 자세.
            <br />
            우리의 꿈을 위해 함께 동참해보세요.
          </S.content>
          <S.ImgWrap>
            <S.ContentImg src="/collection/about/section3.png" />
          </S.ImgWrap>
        </S.AboutSection>
      </WrapperWidth1000px>
    </>
  );
}
