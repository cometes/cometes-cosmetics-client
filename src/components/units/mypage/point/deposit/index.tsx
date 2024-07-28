import { Checkbox, ConfigProvider, Radio } from "antd";
import Title from "../../../../commons/parts/title";
import * as S from "./style";
import { useEffect, useState } from "react";
import InputHeight40px from "../../../../commons/parts/inputs/height40px";
import DivideLine from "../../../../commons/parts/divideLine";
import ButtonHeight50px from "../../../../commons/parts/buttons/height50px";
import WrapperWidth800px from "../../../../commons/parts/wrapper/w800";
import { usePoint } from "../../../../commons/hooks/custom/usePoint";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPointCharge } from "../../../../../commons/libraries/schema";

export default function Deposit() {
  const priceArr = {
    list: [5000, 10000, 15000, 20000, 30000, 50000, 100000],
    checked: 5000
  };
  const paymentArr = ["카카오페이", "신용 카드"];
  const [selectedValue, setSelectedValue] = useState(5000);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [prevPoint, setPrevPoint] = useState(0);

  const onClickPrice = (value: number) => () => {
    setSelectedValue(value);
    setValue("amount", value);
    void trigger("amount");
  };
  const onClickPayment = (value: string) => () => {
    setSelectedPayment(value);
    setValue("payment", value);
    void trigger("payment");
  };

  const onCheckCharge = (e: { target: { checked: any } }) => {
    setValue("confirm", e.target.checked);
    void trigger("confirm");
  };
  const storage = globalThis?.sessionStorage;

  useEffect(() => {
    setPrevPoint(Number(storage.getItem("prevPoint")));
    setValue("amount", 5000);
    void trigger("amount");
  }, []);

  const { onClickCharge } = usePoint();

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schemaPointCharge),
    mode: "onSubmit"
  });

  return (
    <>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      <Title title="포인트 충전" />
      <WrapperWidth800px>
        <form onSubmit={handleSubmit(onClickCharge)}>
          <S.SectionWrap>
            <S.SectionTitle>충전할 포인트</S.SectionTitle>
            <S.SectionContent>
              <S.SectionListWrap>
                {priceArr.list.map(el => (
                  <S.SectionListBox
                    key={el}
                    className={selectedValue === el ? "checked" : ""}
                    onClick={onClickPrice(el)}
                  >
                    <S.LabelWrap>
                      <S.LabelBox>
                        <S.Radio
                          type="radio"
                          name="point-amount"
                          value={el}
                          defaultChecked={priceArr.checked === el}
                        />
                        <S.Point>{el.toLocaleString()}P</S.Point>
                      </S.LabelBox>
                      <S.Price>{el.toLocaleString()}원</S.Price>
                    </S.LabelWrap>
                  </S.SectionListBox>
                ))}
              </S.SectionListWrap>
              <S.ResultBox>
                충전 후 예상 보유 포인트
                <S.ResultPoint>
                  {(prevPoint + selectedValue).toLocaleString()} P
                </S.ResultPoint>
              </S.ResultBox>
            </S.SectionContent>
          </S.SectionWrap>
          <S.SectionWrap>
            <S.SectionTitle>결제 수단</S.SectionTitle>
            <S.SectionContent>
              <S.SectionListWrap>
                <S.SectionListBox
                  className={selectedPayment === "kakaopay" ? "checked" : ""}
                  onClick={onClickPayment("kakaopay")}
                >
                  <S.LabelWrap>
                    <S.LabelBox>
                      <S.Radio
                        type="radio"
                        name="point-payment"
                        value="카카오페이"
                      />
                      <S.Point>카카오페이</S.Point>
                      <S.Kakao src="/logo/pay.png"></S.Kakao>
                    </S.LabelBox>
                  </S.LabelWrap>
                </S.SectionListBox>
                <S.SectionListBox className="disable">
                  <S.LabelWrap>
                    <S.LabelBox>
                      <S.Radio
                        type="radio"
                        name="point-payment"
                        value="신용카드"
                        disabled
                      />
                      <S.Point>신용카드</S.Point>
                      <S.LabelDesc>* 개발 중 입니다.</S.LabelDesc>
                    </S.LabelBox>
                  </S.LabelWrap>
                </S.SectionListBox>
              </S.SectionListWrap>
              <S.Error>{formState.errors.payment?.message}</S.Error>
            </S.SectionContent>
          </S.SectionWrap>
          <S.SectionWrap>
            <S.SectionTitle>결제 정보</S.SectionTitle>
            <S.SectionContent>
              <S.InputWrap>
                <p>이름</p>
                <S.InputBox>
                  <InputHeight40px
                    border="1px solid #E4E5ED"
                    register={register("name")}
                  />
                </S.InputBox>
                <S.Error>{formState.errors.name?.message}</S.Error>
              </S.InputWrap>
              <S.InputWrap>
                <p>이메일</p>
                <S.InputBox>
                  <InputHeight40px
                    border="1px solid #E4E5ED"
                    register={register("email")}
                  />
                </S.InputBox>
                <S.Error>{formState.errors.email?.message}</S.Error>
              </S.InputWrap>
              <S.InputWrap>
                <p>연락처</p>
                <S.InputBox>
                  <InputHeight40px
                    border="1px solid #E4E5ED"
                    register={register("phone")}
                  />
                </S.InputBox>
                <S.Error>{formState.errors.phone?.message}</S.Error>
              </S.InputWrap>
            </S.SectionContent>
          </S.SectionWrap>
          <S.SectionWrap>
            <S.SectionTitle>결제 금액</S.SectionTitle>
            <S.ResultPrice>{selectedValue.toLocaleString()}원</S.ResultPrice>
          </S.SectionWrap>
          <S.SectionWrap>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#111"
                }
              }}
            >
              <Checkbox onChange={onCheckCharge}>
                <S.AgreeText>
                  주문 내용과 아래 유의 사항을 확인하였으며 결제 진행에
                  동의합니다.
                </S.AgreeText>
              </Checkbox>
            </ConfigProvider>
          </S.SectionWrap>
          <S.Error>{formState.errors.confirm?.message}</S.Error>
          <DivideLine border="1px solid #D9D9D9" margin="30px 0 0 0" />
          <S.SubmitButtonWrap>
            <S.SubmitButtonBox>
              <ButtonHeight50px
                content="결제하기"
                type="submit"
                background={formState.isValid ? "#111" : ""}
                color={formState.isValid ? "#fff" : ""}
              />
            </S.SubmitButtonBox>
          </S.SubmitButtonWrap>
          <S.NoteBox>
            <S.NoteList>
              충전한 포인트 전액 결제 취소는 포인트를 구매한 뒤 사용한 이력이
              없고 결제 후 영업일 기준으로 5일 안에 결제 취소한 경우에
              가능합니다. 포인트 충전 내역에서 ‘결제 취소’를 클릭하여 포인트
              결제를 취소할 수 있습니다. 결제사 정책에 따라 카드 승인 취소 또는
              대금이 고객님의 계좌로 입금되기까지 영업일 기준으로 최대 5일이
              소요될 수 있습니다.
            </S.NoteList>
            <S.NoteList>
              위 경우를 제외하고 충전한 포인트의 잔액이 80% 이하일 때에 한해
              환불 신청이 가능합니다. 1,000원 또는 잔액의 10% 중 큰 금액을
              환급수수료로 제외하고 환불해 드립니다. 잔액이 1,000원 이하면
              환불이 불가능합니다. 환불은 고객센터를 통해 신청할 수 있습니다.
            </S.NoteList>
            <S.NoteList>
              환불 페이지의 모든 양식을 기입하여 제출하면 즉시 잔여 포인트가
              차감됩니다. 환불한 금액은 영업일 기준으로 5일 안에 환불 계좌로
              입금해 드립니다.
            </S.NoteList>
            <S.NoteList>
              미성년자는 포인트를 충전하기 전에 부모 등 법정 대리인의 동의를
              받아야 합니다. 법정대리인이 동의하지 않으면 미성년자 본인 또는
              법정대리인이 이용 계약을 취소할 수 있습니다.
            </S.NoteList>
            <S.NoteList>
              포인트는 결제한 날로부터 5년이 되는 시점에 소멸됩니다. 단, 직접
              회원 탈퇴하거나 5년 이상 로그인하지 않아 계정이 삭제되면 그 즉시
              소멸되며 복구할 수 없습니다.
            </S.NoteList>
            <S.NoteList>
              자세한 내용은 서비스 이용 전 동의하신 이용약관을 참고해주세요.
            </S.NoteList>
          </S.NoteBox>
        </form>
      </WrapperWidth800px>
    </>
  );
}
