import { useRouter } from "next/router";
import Header from "./header";

export default function Layout(props: any) {
  const HIDDEN_HEADER = "/signup";
  const WHITE_HEADER = "/mypage";

  const router = useRouter();
  const isMainHeaderActive = !router.asPath.includes(HIDDEN_HEADER);
  const iswhiteHeaderActive = router.asPath.includes(WHITE_HEADER);

  return (
    <>
      {isMainHeaderActive && (
        <Header iswhite={iswhiteHeaderActive ? true : false} />
      )}
      {props.children}
    </>
  );
}
