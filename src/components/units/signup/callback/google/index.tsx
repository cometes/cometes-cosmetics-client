import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores";

export default function GoogleCallback() {
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
            "https://oauth2.googleapis.com/token",
            {
              code,
              client_id: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
              client_secret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
              grant_type: "authorization_code",
              redirect_uri: "http://localhost:3000/signup/callback/google"
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
                provider: "google",
                accessToken: res?.data?.access_token
              }
            );

            // 쿠키에 리프레시 토큰 및 마지막 로그인 수단 저장
            setAppCookies("refresh_token", res?.data?.refresh_token, {
              path: "/",
              expires: date
            });
            setAppCookies("recentlyLoggedInWith", "google", {
              path: "/",
              expires: date
            });

            const storage = globalThis?.sessionStorage;

            if (login?.data?.data.includes("@")) {
              // sessionStorage에 저장

              storage.setItem("email", login?.data?.data);
              storage.setItem("provider", "google");
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
