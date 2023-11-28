import styled from "@emotion/styled";

const Line = styled.div<{
  border: string;
  margin: string;
}>`
  border-bottom: ${props => props.border};
  margin: ${props => props.margin};
`;

export default function DivideLine(props) {
  return <Line border={props.border} margin={props.margin} />;
}
