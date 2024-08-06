import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores";

export default function KakaoCallback() {
  const router = useRouter();
  const [appCookies, setAppCookies] = useCookies();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const date = new Date();
  date.setDate(date.getDate() + 14);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    const getToken = async () => {
      try {
        const tokens = await axios
          .post(
            "https://kauth.kakao.com/oauth/token",
            {
              code,
              client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
              grant_type: "authorization_code",
              redirect_uri: "https://cometes-cosmetics.com/signup/callback/kakao"
            },
            {
              headers: {
                "content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(async res => {
            const login = await axios.post(
              "https://macproj.shop/login/socialLogin",
              {
                provider: "kakao",
                accessToken: res?.data?.access_token
              }
            );

            // 쿠키에 마지막 로그인 수단 저장
            setAppCookies("recentlyLoggedInWith", "kakao", {
              path: "/",
              expires: date
            });

            const storage = globalThis?.sessionStorage;

            if (login?.data?.data.includes("@")) {
              // 기존 회원이 아닌 경우, sessionStorage에 저장
              storage.setItem("email", login?.data?.data);
              storage.setItem("provider", "kakao");
              router.push(`/signup/validation`);
            } else {
              // 기존 회원인 경우, localStorage에 액세스 토큰 저장
              setAccessToken(login?.data?.data);
              localStorage.setItem("accessToken", login?.data?.data ?? "");
              setAppCookies("accessToken", login?.data?.data ?? "", {
                path: "/",
                expires: date
              });
              router.push(storage.getItem("prevPath"));
            }
          });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };
    getToken();
  }, []);
  return <></>;
}
