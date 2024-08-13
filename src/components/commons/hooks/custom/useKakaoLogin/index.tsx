import ButtonHeight50px from "../../../parts/buttons/height50px";
import { useRouter } from "next/router";

export default function KakaoLoginComponent(props) {
  const router = useRouter();

  const redirect_uri = "https://cometes-cosmetics.com/signup/callback/kakao";
  const redirect_uri2 = "http://localhost:3000/signup/callback/kakao";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${redirect_uri}&response_type=code`;

  const kakaoLogin = async () => {
    router.push(kakaoURL);
  };

  return (
    <ButtonHeight50px
      content={
        props.isLogin
          ? "카카오톡 간편 로그인하기"
          : "카카오톡 간편 회원가입하기"
      }
      type="button"
      src="/logo/kakao.png"
      background="#fce84d"
      color="#333"
      onClick={kakaoLogin}
    />
  );
}
