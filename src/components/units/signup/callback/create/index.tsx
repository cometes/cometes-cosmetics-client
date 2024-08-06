import ButtonHeight40px from "../../../../commons/parts/buttons/height40px";
import InputHeight40px from "../../../../commons/parts/inputs/height40px";
import * as S from "./style";
import AddressModal from "../../../../commons/hooks/custom/useAddress";
import { useSignup } from "../../../../commons/hooks/custom/useSignup";

export default function SignupCreate() {
  const {
    isAddressModalOpen,
    setIsAddressModalOpen,
    onCompleteAddressSearch,
    onClickSubmitSignUp,
    address,
    addressCode,
    register,
    handleSubmit,
    formState
  } = useSignup();

  return (
    <>
      <AddressModal
        isAddressModalOpen={isAddressModalOpen}
        setIsAddressModalOpen={setIsAddressModalOpen}
        onCompleteAddressSearch={onCompleteAddressSearch}
      />
      <S.Wrapper>
        <a href="/">
          <S.Logo src="/logo/logo-black.svg" />
        </a>
        <form onSubmit={handleSubmit(onClickSubmitSignUp)}>
          <S.Container>
            <S.Text>
              회원가입을 완료하기 위해 <br />
              추가 정보를 입력해주세요!
            </S.Text>
            <S.InputWrap>
              <S.InputCategory>성함</S.InputCategory>
              <S.InputBox>
                <InputHeight40px
                  border="1px solid #E4E5ED"
                  placeholder="성함"
                  register={register("name")}
                />
              </S.InputBox>
              <S.Error>{formState.errors.name?.message}</S.Error>
            </S.InputWrap>
            <S.InputWrap>
              <S.InputCategory>배송지 주소</S.InputCategory>
              <S.AddressBox>
                <S.AddressInputBox>
                  <InputHeight40px
                    border="1px solid #E4E5ED"
                    placeholder="우편번호"
                    value={addressCode}
                    disabled={true}
                  />
                </S.AddressInputBox>
                <S.AddressButtonBox>
                  <ButtonHeight40px
                    content="주소검색"
                    color="#fff"
                    background="#111"
                    onClick={() => {
                      setIsAddressModalOpen(prev => !prev);
                    }}
                  />
                </S.AddressButtonBox>
              </S.AddressBox>
              <S.InputBox>
                <InputHeight40px
                  border="1px solid #E4E5ED"
                  placeholder="주소"
                  value={address}
                  disabled={true}
                />
              </S.InputBox>
              <S.Error>{formState.errors.address?.message}</S.Error>
              <S.InputBox>
                <InputHeight40px
                  border="1px solid #E4E5ED"
                  placeholder="상세주소 입력"
                  register={register("detailAddress")}
                />
              </S.InputBox>
              <S.Error>{formState.errors.detailAddress?.message}</S.Error>
              <S.InputWrap>
                <ButtonHeight40px
                  content="회원가입하기"
                  background={formState.isValid ? "#111" : ""}
                  color={formState.isValid ? "#fff" : ""}
                  type="submit"
                />
              </S.InputWrap>
            </S.InputWrap>
          </S.Container>
        </form>
      </S.Wrapper>
    </>
  );
}
