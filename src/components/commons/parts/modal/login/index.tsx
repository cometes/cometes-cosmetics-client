import { Modal } from "antd";
import * as S from "./style";
import KakaoLoginComponent from "../../../hooks/custom/useKakaoLogin";
import GoogleLoginComponent from "../../../hooks/custom/useGoogleLogin";
import NaverLoginComponent from "../../../hooks/custom/useNaverLogin";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import { useCookies } from "react-cookie";

export default function LoginModal(props) {
  const { onClickMoveToPage } = useMoveToPage();
  const [appCookies, setAppCookies] = useCookies();

  return (
    <Modal
      className="LoginModal"
      open={props.isModalOpen}
      onCancel={props.handleCancel}
      footer={null}
      width={"fit-content"}
      closeIcon={false}
      style={{ top: "200px" }}
    >
      <S.Wrapper>
        <S.Logo onClick={e => e.preventDefault()}>
          <S.LogoImg src="/logo/logo-black.svg" />
        </S.Logo>
        <S.LoginComponentWrap>
          <S.LoginComponentBox>
            <KakaoLoginComponent isLogin={true} />
            {appCookies["recentlyLoggedInWith"] === "kakao" && (
              <S.RecentLoginBox>
                <S.RecentLoginText>마지막으로 로그인 했어요</S.RecentLoginText>
              </S.RecentLoginBox>
            )}
          </S.LoginComponentBox>
          <S.LoginComponentBox>
            <GoogleLoginComponent isLogin={true} />
            {appCookies["recentlyLoggedInWith"] === "google" && (
              <S.RecentLoginBox>
                <S.RecentLoginText>마지막으로 로그인 했어요</S.RecentLoginText>
              </S.RecentLoginBox>
            )}
          </S.LoginComponentBox>
          <S.LoginComponentBox>
            <NaverLoginComponent isLogin={true} />
            {appCookies["recentlyLoggedInWith"] === "naver" && (
              <S.RecentLoginBox>
                <S.RecentLoginText>마지막으로 로그인 했어요</S.RecentLoginText>
              </S.RecentLoginBox>
            )}
          </S.LoginComponentBox>
        </S.LoginComponentWrap>
        <S.JoinBox>
          <S.JoinText>아직 회원이 아니세요?</S.JoinText>
          <S.JoinButton onClick={onClickMoveToPage("/signup")}>
            회원가입 하기
          </S.JoinButton>
        </S.JoinBox>
      </S.Wrapper>
    </Modal>
  );
}
