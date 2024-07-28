import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #111;
  padding-bottom: 8px;
`;
export const Title = styled.h2`
  font-size: 2.4rem;
  line-height: 2.4rem;
`;
export const CloseButton = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CloseIcon = styled.i`
  font-size: 2rem;
  line-height: 2rem;
`;
export const OptionWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const OptionIcon = styled.span<{
  code: string;
}>`
  display: block;
  width: 30px;
  height: 30px;
  background-color: ${props => props.code};
  border-radius: 50%;
`;
export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`;
export const OptionTitle = styled.p<{
  code: string;
}>`
  display: flex;
  align-items: center;
  color: ${props => props.code};

  ::after {
    display: block;
    content: "";
    width: 1px;
    height: 18px;
    background-color: #c7c7c7;
    margin: 0 10px;
  }
`;
export const OptionDesc = styled.p`
  color: #555;
  font-size: 1.4rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
export const ButtonBox = styled.div`
  width: 100px;

  &:last-of-type {
    margin-left: 8px;
  }
`;
