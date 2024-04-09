import { Modal, Select } from "antd";
import * as S from "./style";
import ButtonHeight40px from "../../buttons/height40px";
import { useState } from "react";

export default function OptionModal(props) {
  const arr = props.optionData?.map(el => {
    return {
      value: el.name,
      label: (
        <S.OptionWrap>
          <S.OptionIcon code={el.code} />
          <S.OptionBox>
            <S.OptionTitle code={el.code}>{el.name}</S.OptionTitle>
            <S.OptionDesc>{el.desc}</S.OptionDesc>
          </S.OptionBox>
        </S.OptionWrap>
      )
    };
  });

  const [selectedOption, setSelectedOption] = useState("");
  const handleChangeOption = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <>
      {props.isModalOpen && (
        <Modal
          open={true}
          onCancel={props.handleCancel}
          width={"fit-content"}
          closeIcon={false}
          footer={null}
        >
          <S.Wrapper>
            <S.TitleBox>
              <S.Title>옵션선택</S.Title>
              <S.CloseButton onClick={props.handleCancel}>
                <S.CloseIcon className="fi fi-rr-cross" />
              </S.CloseButton>
            </S.TitleBox>
            <Select
              style={{ width: 300, marginTop: 16 }}
              size="large"
              options={arr}
              defaultValue={props.defaultValue}
              onChange={handleChangeOption}
            />
            <S.ButtonWrap>
              <S.ButtonBox>
                <ButtonHeight40px content="취소" onClick={props.handleCancel} />
              </S.ButtonBox>
              <S.ButtonBox>
                <ButtonHeight40px
                  content="선택완료"
                  color="#fff"
                  background="#111"
                  onClick={() => {
                    props.onClickOptionChange(
                      selectedOption === ""
                        ? props.defaultValue
                        : selectedOption
                    );
                    props.handleOk();
                  }}
                />
              </S.ButtonBox>
            </S.ButtonWrap>
          </S.Wrapper>
        </Modal>
      )}
    </>
  );
}
