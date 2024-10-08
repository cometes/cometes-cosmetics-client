import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { accessTokenState } from "../../../../../commons/stores";
import { useRecoilState } from "recoil";

export default function NaverCallback() {
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
            "https://naver-login-980f8cf85293.herokuapp.com/https://nid.naver.com/oauth2.0/token",
            {
              code,
              client_id: process.env.NEXT_PUBLIC_NAVER_API_KEY,
              grant_type: "authorization_code",
              client_secret: process.env.NEXT_PUBLIC_NAVER_STATE,
              state: process.env.NEXT_PUBLIC_NAVER_STATE
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
                provider: "naver",
                accessToken: res?.data?.access_token
              }
            );

            // 쿠키에 리프레시 토큰 및 마지막 로그인 수단 저장
            setAppCookies("refresh_token", res?.data?.refresh_token, {
              path: "/",
              expires: date
            });
            setAppCookies("recentlyLoggedInWith", "naver", {
              path: "/",
              expires: date
            });

            const storage = globalThis?.sessionStorage;

            if (login?.data?.data.includes("@")) {
              // sessionStorage에 저장

              storage.setItem("email", login?.data?.data);
              storage.setItem("provider", "naver");
              router.push(`/signup/validation`);
            } else {
              // 기존 회원인 경우, localStorage에 액세스 토큰 저장
              // setAccessToken(login?.data?.data);
              // localStorage.setItem("accessToken", login?.data?.data ?? "");
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
