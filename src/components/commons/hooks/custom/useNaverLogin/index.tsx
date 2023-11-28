import ButtonHeight50px from "../../../parts/buttons/height50px";
import { useRouter } from "next/router";


export default function NaverLoginComponent() {
  const router = useRouter();

  const clientID = "Q4b7VTXKKO_0D2MvJ5pf";
  const redirect_uri = "http://localhost:3000/signup/callback/naver";
  const stateString = "jfeC87TSkY";
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirect_uri}&state=${stateString}`;

  const naverLogin = async () => {
    router.push(naverURL);
  };

  return (
    <ButtonHeight50px
      content="네이버 간편 회원가입하기"
      type="button"
      src="/logo/naver.png"
      background="#1EC101"
      color="#fff"
      onClick={naverLogin}
    />
  );
}
