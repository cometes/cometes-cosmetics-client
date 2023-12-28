import ReactFullpage from "@fullpage/react-fullpage";
import * as S from "./style";
import Footer from "../../commons/layout/footer";
import { TypeAnimation } from "react-type-animation";

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};

export default function AIDSFund() {
  const credits: Credits = {
    enabled: true,
    label: "",
    position: "left"
  };

  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        scrollOverflow={true}
        credits={credits}
        afterLoad={() => {}}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <S.Section className="section">
                <S.BannerImg src="/collection/AIDSFund/banner.png" />
                <S.BannerTextBox>
                  <S.BannerLogo src="/collection/AIDSFund/logo.png" />
                  <S.BannerText>
                    우리의 목적은 단순한 제품을 넘어서 우리가 살고 있는
                    커뮤니티와 지구를 발전시키기 위함입니다
                    <br />
                    우리의 꿈을 위해 함께 동참해보세요
                  </S.BannerText>
                </S.BannerTextBox>
              </S.Section>
              <S.Section className="section light">
                <S.Container>
                  <S.SectionTitle>OUR STORY</S.SectionTitle>
                  <S.ContentBox>
                    <S.ContentText>
                      맥 에이즈 펀드는 그 자체로 HIV/AIDS 펀드의 개척자로서
                      <br />
                      도움의 손길이 부족한 지역과 사람들을 돕는 조직에게
                      <br />
                      <S.ContentTextHighlight>
                        재정적 지원을{" "}
                      </S.ContentTextHighlight>
                      제공합니다.
                    </S.ContentText>
                    <S.ContentText>
                      M·A·C 에이즈 펀드는 해당 분야에서
                      <br />
                      최대 규모의 비제약업계 기업 기부자로서
                      <br />
                      HIV/AIDS를 겪고 있는 사람들에게 다양한 서비스를 제공하는
                      <br /> 전 세계 다양한 조직들을 지원하여 <br />
                      <S.ContentTextHighlight>
                        빈곤과 HIV/AIDS의 관련성
                      </S.ContentTextHighlight>
                      을 해소하기 위해 전념하고 있습니다.
                    </S.ContentText>
                    <S.ContentText>
                      지금까지 M·A·C 에이즈 펀드는 맥 비바 글램 립스틱과
                      립글라스 판매를 통해서만 <br /> 4억 달러 이상의 기금을
                      조성했으며
                      <br /> HIV/AIDS 퇴치를 위해 판매액
                      <S.ContentTextHighlight>
                        {" "}
                        전액을 기부했습니다.
                      </S.ContentTextHighlight>
                    </S.ContentText>
                  </S.ContentBox>
                </S.Container>
                <S.DecoWrap>
                  <S.DecoImg
                    src="/collection/AIDSFund/top.png"
                    className="topLeft"
                  />
                  <S.DecoImg
                    src="/collection/AIDSFund/bottom.png"
                    className="btmRight"
                  />
                  <S.DecoImg
                    src="/collection/AIDSFund/circle.png"
                    className="rightTop"
                  />
                  <S.DecoImg
                    src="/collection/AIDSFund/circle.png"
                    className="leftBtm"
                  />
                  <S.DecoRing className="rightTop" />
                  <S.DecoRing className="leftBtm" />
                </S.DecoWrap>
              </S.Section>
              <S.Section className="section">
                <S.Container>
                  <S.SectionTitle>OUR MISSION</S.SectionTitle>
                  <S.IconWrap>
                    <S.IconFlexBox>
                      <S.IconBox className="icon1">
                        <S.Icon src="/collection/AIDSFund/icon1.png" />
                        <S.IconTitle>우리는 여성을 지지합니다.</S.IconTitle>
                        <S.IconContent>
                          맥 비바 글램 파트너인 지역 사회 기관들은 <br />
                          여성의 건강한 미래와 평등을 위해 나아갑니다.
                        </S.IconContent>
                      </S.IconBox>
                    </S.IconFlexBox>
                    <S.IconFlexBox>
                      <S.IconBox className="icon2">
                        <S.Icon src="/collection/AIDSFund/icon2.png" />
                        <S.IconTitle>차별 없는 사회를 지향합니다.</S.IconTitle>
                        <S.IconContent>
                          맥 비바 글램은 성 소수자 커뮤니티를 <br />
                          지지하고 의지할 곳 없는 성 소수 청소년들을 <br />
                          지역 사회 기관과 함께 자립할 수 있도록 도와줍니다.
                        </S.IconContent>
                      </S.IconBox>
                    </S.IconFlexBox>
                    <S.IconFlexBox>
                      <S.IconBox className="icon3">
                        <S.Icon src="/collection/AIDSFund/icon3.png" />
                        <S.IconTitle>HIV / AIDS에 대항합니다</S.IconTitle>
                        <S.IconContent>
                          맥 비바 글램은 HIV / AIDS를 종식시키기 위해 <br />
                          노력합니다.
                        </S.IconContent>
                      </S.IconBox>
                    </S.IconFlexBox>
                  </S.IconWrap>
                </S.Container>
                <S.WaveWrap>
                  <S.WaveBox>
                    <S.Wave src="/collection/AIDSFund/wave.png" />
                    <S.Wave src="/collection/AIDSFund/wave.png" />
                  </S.WaveBox>
                  <S.WaveBox>
                    <S.Wave src="/collection/AIDSFund/wave.png" />
                    <S.Wave src="/collection/AIDSFund/wave.png" />
                  </S.WaveBox>
                  <S.WaveBox>
                    <S.Wave src="/collection/AIDSFund/wave.png" />
                    <S.Wave src="/collection/AIDSFund/wave.png" />
                  </S.WaveBox>
                </S.WaveWrap>
              </S.Section>
              <S.Section className="section">
                <S.SectionTitle className="section3">
                  94년부터 삶을 변화시켜왔습니다.
                </S.SectionTitle>
                <S.ContentBox className="section3">
                  <S.ContentText>
                    여러분이 비바 글램 립스틱을 구매해주시면, 맥은 부가세를
                    제외한 판매 금액의 100% 전액을 <br /> 지역 사회 모두의
                    건강한 미래와 평등을 위해 지역 단체에 기부합니다.
                  </S.ContentText>
                </S.ContentBox>
                <S.PaperWrap>
                  <S.PaperBox>
                    {/* <S.PaperText>
                      92개국의 <br /> 1,818개의 기관에게 <br /> 9,713건 이상
                      <br />
                      기부하였습니다.
                    </S.PaperText> */}
                    <TypeAnimation
                      sequence={[
                        `92개국의\n1,818개의 기관에게\n9,713건 이상\n기부하였습니다.`,
                        10000,
                        ""
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{
                        whiteSpace: "pre-line",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        fontSize: "4rem",
                        fontFamily: "AritaBuri",
                        padding: "100px 80px"
                      }}
                      repeat={Infinity}
                    />
                    <S.Paper src="/collection/AIDSFund/paper.png" />
                  </S.PaperBox>
                  <S.LineWrap>
                    <div>
                      <S.DecoBox>
                        <S.DecoIcon src="/collection/AIDSFund/icon4.png" />
                        <S.DecoIcon src="/collection/AIDSFund/icon5.png" />
                      </S.DecoBox>
                      <S.Line />
                    </div>
                    <div>
                      <S.DecoBox>
                        <S.DecoIcon src="/collection/AIDSFund/icon4.png" />
                        <S.DecoIcon src="/collection/AIDSFund/icon5.png" />
                      </S.DecoBox>
                      <S.Line />
                    </div>
                  </S.LineWrap>
                </S.PaperWrap>
                <S.SloganWrap>
                  <S.SloganBox>
                    <S.Slogan src="/collection/AIDSFund/slogan.png" />
                    <S.Slogan src="/collection/AIDSFund/slogan.png" />
                  </S.SloganBox>
                </S.SloganWrap>
                <S.Container>
                  <S.GlamWrap>
                    <S.GlamBigTitle>
                      27 YEARS OF <br />
                      GIVING A GLAM!
                    </S.GlamBigTitle>
                    <S.GlamBox>
                      <S.GlamTitle>
                        비바 글램의 <br /> 역사와 <br /> 이야기
                      </S.GlamTitle>
                      <S.GlamContent>
                        맥 비바 글램의 빛나는 하이라이트, <br /> 전설적인
                        아이콘들과의 협업, <br /> 아이코닉한 쉐이드들
                      </S.GlamContent>
                      <S.TextButton>VIEW MORE</S.TextButton>
                    </S.GlamBox>
                    <S.GlamImg src="/collection/AIDSFund/glam.png" />
                    <S.GlamDeco src="/collection/AIDSFund/glamDeco.png" />
                  </S.GlamWrap>
                </S.Container>
              </S.Section>
              <S.Section className="section fp-auto-height">
                <Footer isCollection={true} />
              </S.Section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
