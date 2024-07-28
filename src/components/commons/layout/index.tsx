import { useRouter } from "next/router";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props: any) {
  const router = useRouter();

  // header 숨기기
  const HIDDEN_HEADER = "/signup";
  const HIDDEN_FOOTER_MARGIN = ["/collections/", "/mypage/cart/"];
  const WHITE_HEADER = ["/mypage", "/order", "/collections", "/item", "/search"];
  const isMainHeaderActive = !router.asPath.includes(HIDDEN_HEADER);
  const isfooterMarginActive = HIDDEN_FOOTER_MARGIN.filter(el =>
    router.asPath.includes(el)
  );
  const iswhiteHeaderActive = WHITE_HEADER.filter(el =>
    router.asPath.includes(el)
  );

  return (
    <>
      {isMainHeaderActive && (
        <Header isWhite={iswhiteHeaderActive[0] !== undefined ? true : false} />
      )}
      {props.children}
      {isMainHeaderActive && (
        <Footer
          isCollection={isfooterMarginActive[0] !== undefined ? true : false}
          isAll={HIDDEN_FOOTER_MARGIN.includes(router.asPath) ? true : false}
        />
      )}
    </>
  );
}
