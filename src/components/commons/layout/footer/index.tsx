import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import * as S from "./style";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Footer(props: {
  isCollection: boolean;
  isAll: boolean;
}) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper isCollection={props.isCollection} isAll={props.isAll}>
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
            <S.FooterList>
              <S.FooterItem
                href="https://www.maccosmetics.co.kr/stores"
                target="_blank"
              >
                STORE
              </S.FooterItem>
            </S.FooterList>
            <S.FooterList>
              <S.FooterItem onClick={onClickMoveToPage("/products/all/")}>
                PRODUCT
              </S.FooterItem>
            </S.FooterList>
            <S.FooterList>
              <S.FooterItem onClick={onClickMoveToPage("/about/story/")}>
                ABOUT
              </S.FooterItem>
            </S.FooterList>
            <S.FooterList>
              <S.FooterItem onClick={onClickMoveToPage("/mypage/")}>
                MY M·A·C
              </S.FooterItem>
            </S.FooterList>
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
            <S.FooterIconBox
              href="https://www.facebook.com/MACCosmeticsKorea"
              target="_blank"
            >
              <S.FooterIcon icon={faFacebookF} />
            </S.FooterIconBox>
            <S.FooterIconBox
              href="https://www.instagram.com/maccosmeticskorea/"
              target="_blank"
            >
              <S.FooterIcon icon={faInstagram} />
            </S.FooterIconBox>
            <S.FooterIconBox
              href="https://twitter.com/MACcosmetics"
              target="_blank"
            >
              <S.FooterIcon icon={faTwitter} />
            </S.FooterIconBox>
            <S.FooterIconBox
              href="https://www.youtube.com/user/MACcosmeticsKR/MACCosmetics"
              target="_blank"
            >
              <S.FooterIcon icon={faYoutube} />
            </S.FooterIconBox>
          </S.FlexBox>
        </S.FooterBottom>
      </S.Container>
    </S.Wrapper>
  );
}
