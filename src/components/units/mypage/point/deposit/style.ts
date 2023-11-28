import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 80px;
`;
export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;
export const SectionWrap = styled.section`
  display: flex;
  margin-top: 80px;
  &:first-of-type {
    margin-top: 40px;
  }
`;
export const SectionTitle = styled.p`
  font-size: 2rem;
  width: 250px;
`;
export const SectionContent = styled.div`
  width: calc(100% - 250px);
`;
export const SectionListWrap = styled.ul``;
export const SectionListBox = styled.li`
  display: flex;
  border: 1px solid #e4e5ed;
  overflow: hidden;
  &:not(:first-of-type) {
    margin-top: -1px;
    border-top: none;
  }
  &:first-of-type {
    border-radius: 8px 8px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 8px 8px;
  }
  &.checked {
    border: 1px solid #111;
  }
  &.disable {
    background-color: #fafafa;
    margin-top: 0;
  }
`;
export const Radio = styled.input`
  appearance: none;
  position: relative;
  &::before {
    content: "";
    box-sizing: border-box;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #ccc;
    transition: border 0.2s ease-in-out;
  }
  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    &::before {
      border: 1px solid #111;
    }
  }
  &:checked {
    &::before {
      background-color: #111;
      border: none;
    }
    &::after {
      background-color: #fff;
    }
  }
  li.disable & {
    cursor: not-allowed;
    &::before {
      border: 1px solid #ccc;
    }
  }
`;
export const LabelWrap = styled.label`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  li.disable & {
    cursor: not-allowed;
    color: #aaa;
  }
`;
export const LabelBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Point = styled.p`
  margin-left: 8px;
  line-height: 16px;
`;
export const Price = styled.p`
  line-height: 16px;
  color: #878787;
`;
export const Kakao = styled.img`
  display: block;
  margin-left: 8px;
  height: 16px;
`;
export const LabelDesc = styled.span`
  font-size: 1.2rem;
  margin-left: 8px;
`;
export const ResultBox = styled.div`
  background-color: #fafafa;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: #848484;
  margin-top: 24px;
`;
export const ResultPoint = styled.span`
  margin-left: 8px;
  color: #111;
`;
export const InputWrap = styled.div`
  margin-top: 40px;
  &:first-of-type {
    margin-top: 0;
  }
`;
export const InputBox = styled.div`
  margin-top: 8px;
`;
export const ResultPrice = styled.p`
  font-size: 2.8rem;
`;
export const AgreeText = styled.p`
  font-size: 1.4rem;
`;
export const SubmitButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const SubmitButtonBox = styled.div`
  width: 240px;
`;
