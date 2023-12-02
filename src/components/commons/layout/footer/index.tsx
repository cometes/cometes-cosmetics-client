import { faMessage } from "@fortawesome/free-regular-svg-icons";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.FooterTop>
          <S.FlexBox>
            <S.FooterContentBox>
              <p>Customer Service</p>
              <S.FooterTitle className="cs">02-6971-3291</S.FooterTitle>
              <S.FooterTitle className="cs">
                CONSUMERCARE@KR.MACCOSMETICS.COM
              </S.FooterTitle>
            </S.FooterContentBox>
          </S.FlexBox>
          <ul>
            <S.FooterList>STORE</S.FooterList>
            <S.FooterList>PRODUCT</S.FooterList>
            <S.FooterList>ABOUT</S.FooterList>
            <S.FooterList>MY M·A·C</S.FooterList>
          </ul>
        </S.FooterTop>
        <S.FooterBottom>
          <S.FooterContentBox>
            <span>이용약관</span> | <span>개인정보 처리방침</span>
            <S.FooterAddress>
              서울시 강남구 강남대로 382 (역삼동) 메리츠타워, 06232
              이엘씨에이한국(유) 대표 SLAVIN PAUL <br /> 사업자등록번호:
              211-81-71889 통신판매업신고번호: 강남-15737호 <br />
              사업자정보조회 고객관리지원팀: 02-6971-3291 호스팅서비스 사업자:
              ㈜엘지유플러스
            </S.FooterAddress>
            <S.FooterAddress>
              COPYRIGHTⓒ MAKE-UP ART COSMETICS. ALL WORLDWIDE RIGHTS RESERVED.
            </S.FooterAddress>
          </S.FooterContentBox>
          <S.FlexBox>
            <S.FooterIcon icon={faFacebookF} />
            <S.FooterIcon icon={faInstagram} />
            <S.FooterIcon icon={faTwitter} />
            <S.FooterIcon icon={faYoutube} />
          </S.FlexBox>
        </S.FooterBottom>
      </S.Container>
    </S.Wrapper>
  );
}
