import GoogleLoginComponent from "../../commons/hooks/custom/useGoogleLogin";
import KakaoLoginComponent from "../../commons/hooks/custom/useKakaoLogin";
import NaverLoginComponent from "../../commons/hooks/custom/useNaverLogin";
import ButtonHeight50px from "../../commons/parts/buttons/height50px";
import * as S from "./style";

export default function Signup() {
  return (
    <S.Wrapper>
      <a href="/">
        <S.Logo src="/logo/logo-black.svg"></S.Logo>
      </a>
      <S.Container>
        <S.Text>
          3초만에 가입하고,
          <br />
          특별한 혜택 받아가세요!
        </S.Text>
        <S.ButtonWrap>
          <KakaoLoginComponent />
          <GoogleLoginComponent />
          <NaverLoginComponent />
        </S.ButtonWrap>
      </S.Container>
    </S.Wrapper>
  );
}
