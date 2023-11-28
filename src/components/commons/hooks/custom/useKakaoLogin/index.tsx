import ButtonHeight50px from "../../../parts/buttons/height50px";
import { useRouter } from "next/router";

export default function KakaoLoginComponent() {
  const router = useRouter();

  const redirect_uri = "http://localhost:3000/signup/callback/kakao";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${redirect_uri}&response_type=code`;

  const kakaoLogin = async () => {
    router.push(kakaoURL);
  };

  return (
    <ButtonHeight50px
      content="카카오톡 간편 회원가입하기"
      type="button"
      src="/logo/kakao.png"
      background="#fce84d"
      color="#333"
      onClick={kakaoLogin}
    />
  );
}
