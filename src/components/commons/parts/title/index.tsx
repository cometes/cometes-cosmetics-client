import styled from "@emotion/styled";

const TitleName = styled.h1`
    font-size: 3.2rem;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 2px solid #111;
`;

export default function Title(props) {
  return <TitleName>{props.title}</TitleName>;
}
