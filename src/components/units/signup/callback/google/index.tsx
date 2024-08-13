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
    if (typeof window !== "undefined") {
      const code = new URL(window.location.href).searchParams.get("code");

      const getToken = async () => {
        try {
          const tokens = await axios.post(
            "https://oauth2.googleapis.com/token",
            {
              code,
              client_id: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
              client_secret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
              grant_type: "authorization_code",
              redirect_uri:
                "https://cometes-cosmetics.com/signup/callback/google"
            },
            {
              headers: {
                "content-Type": "application/x-www-form-urlencoded"
              }
            }
          );

          const login = await axios.post(
            "https://macproj.shop/login/socialLogin",
            {
              provider: "google",
              accessToken: tokens?.data?.access_token
            }
          );

          // 쿠키에 리프레시 토큰 및 마지막 로그인 수단 저장
          setAppCookies("refresh_token", tokens?.data?.refresh_token, {
            path: "/",
            expires: date
          });
          setAppCookies("recentlyLoggedInWith", "google", {
            path: "/",
            expires: date
          });

          const storage = globalThis?.sessionStorage;

          if (login?.data?.data.includes("@")) {
            // 기존 회원이 아닌 경우, sessionStorage에 저장
            storage.setItem("email", login?.data?.data);
            storage.setItem("provider", "google");
            router.push(`/signup/validation`);
          } else {
            // 기존 회원인 경우, 쿠키에 액세스 토큰 저장
            setAppCookies("accessToken", login?.data?.data ?? "", {
              path: "/",
              expires: date
            });
            router.push(storage.getItem("prevPath"));
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error("Error during Google login:", error.message);
            alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
          }
        }
      };

      if (code) {
        getToken();
      }
    }
  }, []);

  return <></>;
}
