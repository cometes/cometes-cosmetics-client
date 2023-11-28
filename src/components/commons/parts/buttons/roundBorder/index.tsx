import styled from "@emotion/styled";
import { mq } from "../../../../../commons/libraries/breakPoints";

const Button = styled.button<{
  background: string;
  border: string;
}>`
  padding: 16px 24px;
  height: 50px;
  border: none;
  border: ${props => props.border};
  border-radius: 25px;
  cursor: pointer;
  background-color: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 8px;

  ${mq.mobile} {
    width: 1.8rem;
    height: auto;
  }
`;
const Text = styled.span<{
  color: string;
}>`
  display: block;
  color: ${props => props.color};
`;

export default function RoundBorderButton(props) {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      background={props.background}
      border={props.border}
    >
      {props.src && <Image src={`${props.src}`} />}
      <Text color={props.color}>{props.content}</Text>
    </Button>
  );
}
