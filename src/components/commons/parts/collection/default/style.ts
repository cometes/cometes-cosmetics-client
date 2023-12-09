import styled from "@emotion/styled";
import { min, max } from "../../../../../commons/libraries/breakPoints";

export const FlexWrap = styled.div`
  display: flex;

  ${max(1215)} {
    flex-direction: column;
  }
`;
export const AsideWrap = styled.aside`
  width: 30%;

  ${max(1215)} {
    width: 100%;
  }
`;
export const AsideBox = styled.div`
  position: sticky;
  top: 80px;
  ${max(1215)} {
    display: none;
  }
  ${min(1215)} {
    display: block;
  }
`;
export const AsideImg = styled.img`
  width: 100%;
  display: none;

  ${max(1215)} {
    display: block;
  }
  ${min(1215)} {
    display: none;
  }
`;
export const Wrapper = styled.div`
  width: 70%;
  padding-bottom: 180px;

  ${max(1215)} {
    width: 100%;
    padding-bottom: 0;
  }
`;
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  ${max(1450)} {
    width: 100%;
    padding: 0 40px;
  }
  ${max(1215)} {
    width: 1000px;
    padding: 0;
  }
  ${max(1015)} {
    width: 100%;
    padding: 0 40px;
  }
`;
