import ButtonHeight40px from "../../../../commons/parts/buttons/height40px";
import InputHeight40px from "../../../../commons/parts/inputs/height40px";
import * as S from "./style";
import { usePhoneCheck } from "../../../../commons/hooks/custom/usePhoneCheck";

export default function SignupValidation() {
  const {
    isTokenInputActive,
    isTokenButtonActive,
    isValidated,
    min,
    sec,
    onClickSendToken,
    onClickTokenButton,
    register,
    handleSubmit,
    formState
  } = usePhoneCheck();

  return (
    <S.Wrapper>
      <a href="/">
        <S.Logo src="/logo/logo-black.svg" />
      </a>
      <form
        onSubmit={
          isTokenInputActive
            ? handleSubmit(onClickTokenButton)
            : handleSubmit(onClickSendToken)
        }
      >
        <S.Container>
          <S.Text>
            회원가입을 완료하기 위해 <br />
            추가 정보를 입력해주세요!
          </S.Text>
          <S.InputWrap>
            <S.InputCategory>연락처</S.InputCategory>
            <S.InputBox>
              <InputHeight40px
                border="1px solid #E4E5ED"
                placeholder="휴대폰 번호를 입력해주세요."
                register={register("phone")}
                disabled={isTokenInputActive}
              />
            </S.InputBox>
            <S.InputBox>
              {!isTokenInputActive && (
                <ButtonHeight40px
                  content="휴대폰 번호 인증하기"
                  border={formState.isValid ? "" : "1px solid #DDDFE3"}
                  type="submit"
                  background={formState.isValid ? "#111" : "#F6F7F9"}
                  color={formState.isValid ? "#fff" : "#BEC3C7"}
                />
              )}
              {isTokenInputActive && (
                <S.AddressBox>
                  <S.AddressInputBox>
                    <InputHeight40px
                      border="1px solid #E4E5ED"
                      placeholder="인증번호 입력"
                      register={register("token")}
                    />
                  </S.AddressInputBox>
                  <S.Timer>{`${min}:${sec}`}</S.Timer>
                  <S.AddressButtonBox>
                    <ButtonHeight40px
                      content={isValidated ? "인증완료" : "인증하기"}
                      color={isTokenButtonActive ? "#fff" : "#666"}
                      background={isTokenButtonActive ? "#111" : "#F3F5F7"}
                      type="submit"
                    />
                  </S.AddressButtonBox>
                </S.AddressBox>
              )}
              <S.Error>{formState.errors.phone?.message}</S.Error>
              <S.Error>{formState.errors.token?.message}</S.Error>
            </S.InputBox>
          </S.InputWrap>
        </S.Container>
      </form>
    </S.Wrapper>
  );
}
