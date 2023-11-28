import ButtonHeight50px from "../../../parts/buttons/height50px";
import { useRouter } from "next/router";

export default function GoogleLoginComponent() {
  const router = useRouter();
  const redirect_uri = "http://localhost:3000/signup/callback/google";

  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&response_type=code&redirect_uri=${redirect_uri}&scope=https://www.googleapis.com/auth/userinfo.email`;

  const googleLogin = async () => {
    router.push(googleURL);
  };
  return (
    <ButtonHeight50px
      content="구글 간편 회원가입하기"
      type="button"
      src="/logo/google.png"
      background="#F7F8FD"
      color="#333"
      onClick={googleLogin}
    />
  );
}
