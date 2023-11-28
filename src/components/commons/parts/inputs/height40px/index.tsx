import styled from "@emotion/styled";

const Input = styled.input<{
  border: string;
}>`
  width: 100%;
  height: 40px;
  border: ${props => props.border};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  padding-left: 12px;
  &::placeholder {
    color: #aaaaac;
  }
  &:disabled {
    cursor: not-allowed;
    color: #b8b8b8;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export default function InputHeight40px(props) {
  return (
    <Input
      type={props.type ?? "text"}
      border={props.border}
      placeholder={props.placeholder}
      value={props.value}
      {...props.register}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
    />
  );
}
