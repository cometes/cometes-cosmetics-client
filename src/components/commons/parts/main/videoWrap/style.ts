import styled from "@emotion/styled";

export const VideoSection = styled.section`
  position: relative;
  padding-top: 60px;
  margin-top: 180px;
  &::before {
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    width: 100%;
    height: 380px;
    background: #f7f7f7;
    transform: translateX(-50%);
    content: "";
  }
`;
export const VideoContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;
export const VideoTextWrap = styled.div`
  position: relative;
  z-index: 10;
  width: 30%;
`;
export const VideoSubTitle = styled.span`
  display: block;
  font-weight: 300;
  font-size: 2.4rem;
  color: #888;
`;
export const VideoTitle = styled.h3`
  display: inline-block;
  font-size: 4.8rem;
  color: #111;
  border-bottom: 4px solid #111;
  cursor: pointer;
  margin-top: 40px;
`;
export const VideoWrap = styled.div`
  aspect-ratio: 16 / 9;
  background-color: #ccc;
  position: relative;
  z-index: 10;
  width: 70%;
`;
export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  height: 0;
  width: 100%;
`;
