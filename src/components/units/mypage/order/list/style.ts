import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProcessWrap = styled.div`
  background-color: #f7f7f7;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
`;
export const ProcessTitle = styled.span`
  color: #666;
`;
export const ProcessText = styled.p`
  color: #888;
  font-size: 4rem;
  text-align: center;

  &.active {
    color: #111;
  }
`;
export const ProcessIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
  color: #bfbfbf;
`;
