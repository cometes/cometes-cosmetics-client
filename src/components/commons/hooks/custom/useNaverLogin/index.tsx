import ButtonHeight50px from "../../../parts/buttons/height50px";
import { useRouter } from "next/router";

export default function NaverLoginComponent(props) {
  const router = useRouter();

  const redirect_uri = "https://cometes-cosmetics.com/signup/callback/naver";
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.NEXT_PUBLIC_NAVER_API_KEY}&response_type=code&redirect_uri=${redirect_uri}&state=${process.env.NEXT_PUBLIC_NAVER_STATE}`;

  const naverLogin = async () => {
    router.push(naverURL);
  };

  return (
    <ButtonHeight50px
      content={
        props.isLogin ? "네이버 간편 로그인하기" : "네이버 간편 회원가입하기"
      }
      type="button"
      src="/logo/naver.png"
      background="#1EC101"
      color="#fff"
      onClick={naverLogin}
    />
  );
}
