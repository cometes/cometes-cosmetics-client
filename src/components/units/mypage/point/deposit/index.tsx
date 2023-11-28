import { Checkbox, ConfigProvider, Radio } from "antd";
import Title from "../../../../commons/parts/title";
import * as S from "./style";
import { useState } from "react";
import InputHeight40px from "../../../../commons/parts/inputs/height40px";
import DivideLine from "../../../../commons/parts/divideLine";
import ButtonHeight50px from "../../../../commons/parts/buttons/height50px";

export default function Deposit() {
  const priceArr = {
    list: [5000, 10000, 15000, 20000, 30000, 50000, 100000],
    checked: 5000
  };
  const paymentArr = ["카카오페이", "신용 카드"];
  const [selectedValue, setSelectedValue] = useState(5000);
  const [selectedPayment, setSelectedPayment] = useState("");
  const onClickPrice = value => () => {
    setSelectedValue(value);
  };
  const onClickPayment = value => () => {
    setSelectedPayment(value);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <Title title="포인트 충전" />
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
                      <S.Point>{el}P</S.Point>
                    </S.LabelBox>
                    <S.Price>{el}원</S.Price>
                  </S.LabelWrap>
                </S.SectionListBox>
              ))}
            </S.SectionListWrap>
            <S.ResultBox>
              충전 후 예상 보유 포인트<S.ResultPoint>5000P</S.ResultPoint>
            </S.ResultBox>
          </S.SectionContent>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SectionTitle>결제 수단</S.SectionTitle>
          <S.SectionContent>
            <S.SectionListWrap>
              <S.SectionListBox
                className={selectedPayment === "카카오페이" ? "checked" : ""}
                onClick={onClickPayment("카카오페이")}
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
                    <S.LabelDesc>* 아직 미지원되는 기능입니다.</S.LabelDesc>
                  </S.LabelBox>
                </S.LabelWrap>
              </S.SectionListBox>
            </S.SectionListWrap>
          </S.SectionContent>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SectionTitle>결제 정보</S.SectionTitle>
          <S.SectionContent>
            <S.InputWrap>
              <p>이름</p>
              <S.InputBox>
                <InputHeight40px border="1px solid #E4E5ED" />
              </S.InputBox>
            </S.InputWrap>
            <S.InputWrap>
              <p>이메일</p>
              <S.InputBox>
                <InputHeight40px border="1px solid #E4E5ED" />
              </S.InputBox>
            </S.InputWrap>
            <S.InputWrap>
              <p>연락처</p>
              <S.InputBox>
                <InputHeight40px border="1px solid #E4E5ED" />
              </S.InputBox>
            </S.InputWrap>
          </S.SectionContent>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SectionTitle>결제 금액</S.SectionTitle>
          <S.ResultPrice>5000원</S.ResultPrice>
        </S.SectionWrap>
        <S.SectionWrap>
          <Checkbox>
            <S.AgreeText>
              주문 내용과 아래 유의 사항을 확인하였으며 결제 진행에 동의합니다.
            </S.AgreeText>
          </Checkbox>
        </S.SectionWrap>
        <DivideLine border="1px solid #D9D9D9" margin="30px 0 0 0" />
        <S.SubmitButtonWrap>
          <S.SubmitButtonBox>
            <ButtonHeight50px content="결제하기" />
          </S.SubmitButtonBox>
        </S.SubmitButtonWrap>
      </S.Container>
    </S.Wrapper>
  );
}
