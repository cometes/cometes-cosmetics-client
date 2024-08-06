import { AppProps } from "next/app";
import { globalStyle } from "../src/commons/styles/globalStyle";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import { CookiesProvider } from "react-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginSetting from "../src/components/commons/login";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    // 페이지가 변경될 때마다 현재 페이지 주소를 sessionStorage 저장
    const storage = globalThis?.sessionStorage;
    const prevPath: string | null = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath ?? "");

    // 현재 페이지 세션 스토리지에 저장
    storage.setItem("currentPath", router.asPath);
  }, [router.asPath]);

  return (
    <>
      <RecoilRoot>
        <HelmetProvider>
          <CookiesProvider>
            <LoginSetting>
              <Global styles={globalStyle} />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </LoginSetting>
          </CookiesProvider>
        </HelmetProvider>
      </RecoilRoot>
    </>
  );
}
