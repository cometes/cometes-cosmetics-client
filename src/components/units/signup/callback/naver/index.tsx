import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NaverCallback() {
  const router = useRouter();

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
              "https://seungwon.shop/login/socialLogin",
              {
                provider: "naver",
                accessToken: res?.data?.access_token
              }
            );

            if (login?.data?.data.includes("@")) {
              // sessionStorage에 저장
              const storage = globalThis?.sessionStorage;
              storage.setItem("email", login?.data?.data);
              storage.setItem("provider", "naver");

              router.push(`/signup/validation`);
            } else {
              router.push("/");
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);
  return <></>;
}
