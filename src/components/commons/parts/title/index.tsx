import styled from "@emotion/styled";

const TitleName = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  border-bottom: 1px solid #d9d9d9;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  color: #222;
`;

export default function Title(props) {
  return <TitleName>{props.title}</TitleName>;
}
