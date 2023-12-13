import styled from "@emotion/styled";

interface DivideLineProps {
  border?: string;
  margin?: string;
}

const Line = styled.div<{
  border: string;
  margin: string;
}>`
  border-bottom: ${props => props.border};
  margin: ${props => props.margin};
`;

export default function DivideLine(props: DivideLineProps) {
  return <Line border={props.border} margin={props.margin} />;
}
