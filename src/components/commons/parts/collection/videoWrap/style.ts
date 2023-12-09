import styled from "@emotion/styled";
import { max, min } from "../../../../../commons/libraries/breakPoints";

export const VideoSection = styled.section`
  overflow: hidden;
  padding: 100px 0;
  background-color: #f7f7f7;

  ${max(1420)} {
    padding: 40px 0;
  }
  ${max(1215)} {
    padding: 80px 0;
  }
`;
export const VideoWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${max(915)} {
    flex-direction: column;
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
  ${max(915)} {
    padding: 0;
  }
`;
export const VideoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 20px 0;
  padding-right: 5%;
  min-height: 270px;
  max-height: 300px;

  ${max(915)} {
    width: 100%;
    min-height: auto;
    padding: 0 40px;
  }
`;
export const VideoRight = styled.div`
  width: 50%;
  min-height: 270px;
  display: flex;
  align-items: center;

  ${max(915)} {
    width: 100%;
    margin-top: 30px;
    min-height: auto;
  }
`;
export const VideoTitle = styled.h3`
  font-family: "AritaBuri";
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 400;

  ${max(1420)} {
    font-size: 3rem;
  }
  ${max(1215)} {
    font-size: 3.6rem;
  }
`;
export const VideoContent = styled.p`
  line-height: 2.2rem;
  margin-top: 16px;
  word-break: keep-all;
`;

export const Arrow = styled.div`
  ${max(915)} {
    display: none;
  }
  ${min(915)} {
    display: block;
  }
`;
