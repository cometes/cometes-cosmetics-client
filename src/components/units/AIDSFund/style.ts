import styled from "@emotion/styled";
import { max } from "../../../commons/libraries/breakPoints";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &.light {
    background: #f8f8f8;
  }
`;
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
export const BannerImg = styled.img`
  display: block;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
export const BannerTextBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  top: 0;
  left: 0;
`;
export const BannerLogo = styled.img`
  display: block;
  width: fit-content;
`;
export const BannerText = styled.p`
  color: #fff;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 10px;
`;
export const SectionTitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 6rem;
  line-height: 6rem;
  text-transform: uppercase;
  text-align: center;
  color: #222;
  font-weight: 500;

  &.section3 {
    margin-top: 120px;
  }
`;
export const ContentBox = styled.div`
  margin-top: 60px;

  &.section3 {
    margin-top: 20px;
  }
`;
export const ContentText = styled.p`
  font-size: 2rem;
  line-height: 2.4rem;
  color: #333;
  text-align: center;

  &:not(:first-of-type) {
    margin-top: 24px;
  }
`;
export const ContentTextHighlight = styled.span`
  color: #af3832;
`;
export const DecoWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const DecoImg = styled.img`
  display: block;
  position: absolute;

  &.topLeft {
    top: -18%;
    left: 5%;
  }
  &.btmRight {
    bottom: 0;
    right: 0;
    width: 300px;
  }
  &.rightTop {
    width: 360px;
    top: -3%;
    right: -100%;
    animation: rotate 10s linear infinite;
    transition: all 1s ease-in-out;
  }
  .fp-section.active &.rightTop {
    right: -3%;
  }

  &.leftBtm {
    width: 220px;
    bottom: 3%;
    left: -100%;
    animation: rotate 10s linear infinite;
  }
  .fp-section.active &.leftBtm {
    left: 3%;
    transition: all 1.6s ease-in-out;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const DecoRing = styled.span`
  display: block;
  position: absolute;

  &.rightTop {
    top: 30%;
    right: -100%;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px dashed #af3832;
    animation: rotateRing 12s linear infinite;
    transition: all 1.3s ease-in-out;
  }
  .fp-section.active &.rightTop {
    right: -3%;
  }

  &.leftBtm {
    bottom: 36%;
    left: -100%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px dashed #af3832;
    animation: rotateRing 12s linear infinite;
  }
  .fp-section.active &.leftBtm {
    left: 3%;
    transition: all 2s ease-in-out;
  }

  @keyframes rotateRing {
    100% {
      transform: rotate(-360deg);
    }
  }
`;
export const IconWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
  height: 300px;
`;
export const IconFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% / 3);
`;
export const IconBox = styled.div`
  position: absolute;
  top: 200%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .fp-section.active &.icon1 {
    top: 0;
    transition: all 1s ease-in-out;
  }
  .fp-section.active &.icon2 {
    top: 0;
    transition: all 1.3s ease-in-out;
  }
  .fp-section.active &.icon3 {
    top: 0;
    transition: all 1.6s ease-in-out;
  }
`;
export const Icon = styled.img`
  display: block;
`;
export const IconTitle = styled.h3`
  font-family: "AritaBuri", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: #222;
  margin-top: 30px;
`;
export const IconContent = styled.p`
  text-align: center;
  color: #444;
  margin-top: 20px;
`;
export const WaveWrap = styled.div`
  position: absolute;
  z-index: 60;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
  height: 90px;
`;
export const WaveBox = styled.div`
  position: absolute;
  display: flex;
  animation: 10s linear infinite wave;
  opacity: 0.8;

  &:nth-of-type(2) {
    animation: wave 18s linear reverse infinite;
    opacity: 0.5;
  }

  &:nth-of-type(3) {
    animation: wave 20s linear infinite;
    opacity: 0.5;
  }
`;
export const Wave = styled.img`
  display: block;

  @keyframes wave {
    100% {
      transform: translateX(-2400px);
    }
  }
`;
export const PaperWrap = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
export const PaperBox = styled.div`
  position: relative;
  z-index: 20;
`;
export const Paper = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
`;
export const PaperText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 4rem;
  font-family: "AritaBuri", sans-serif;
  padding: 100px 80px;
`;
export const LineWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 35%;
  left: 0;
  animation: line 30s linear infinite;

  @keyframes line {
    100% {
      transform: translateX(-100vw);
    }
  }
`;
export const DecoBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Line = styled.span`
  display: block;
  width: 100vw;
  border-bottom: 6px solid #af3832;
`;
export const DecoIcon = styled.img`
  display: block;
`;
export const SloganWrap = styled.div`
  overflow: hidden;
  margin: 240px 0;
`;
export const SloganBox = styled.div`
  display: flex;
  animation: slogan 30s linear infinite;

  @keyframes slogan {
    100% {
      transform: translateX(-1962px);
    }
  }
`;
export const Slogan = styled.img`
  display: block;

  ${max(768)} {
    height: 60px;
  }
`;
export const GlamWrap = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;
export const GlamBigTitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 12rem;
  line-height: 10rem;
  font-weight: 300;
  letter-spacing: -0.864rem;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;
export const GlamBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const GlamImg = styled.img`
  margin-top: 210px;
  margin: 160px 320px 140px 320px;
  width: 40%;
  max-width: 480px;
`;
export const GlamTitle = styled.h3`
  font-family: "AritaBuri", sans-serif;
  font-size: 5rem;
  font-weight: 400;
  line-height: 5rem;
`;
export const GlamContent = styled.p`
  font-size: 2rem;
  line-height: 2.4rem;
  color: #333;
  margin-top: 20px;
`;
export const TextButton = styled.a`
  display: block;
  text-decoration: underline;
  font-family: "Raleway", sans-serif;
  font-size: 1.8rem;
  margin-top: 60px;
  cursor: pointer;
`;
export const GlamDeco = styled.img`
  display: block;
  position: absolute;
  bottom: 6%;
  right: 18%;
  animation: rotateRing 12s linear infinite;
`;
