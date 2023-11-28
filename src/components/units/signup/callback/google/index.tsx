import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function GoogleCallback() {
  const router = useRouter();

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
              "https://seungwon.shop/login/socialLogin",
              {
                provider: "google",
                accessToken: res?.data?.access_token
              }
            );

            if (login?.data?.data.includes("@")) {
              // sessionStorage에 저장
              const storage = globalThis?.sessionStorage;
              storage.setItem("email", login?.data?.data);
              storage.setItem("provider", "google");

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
