import styled from "@emotion/styled";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { max } from "../../../../../../commons/libraries/breakPoints";

export const StyledSlider = styled(SliderComponent)<{
  highlight?: string;
  color: string;
}>`
  width: 100%;
  position: absolute;

  ${max(915)} {
    position: relative;
  }

  .slick-list {
  }
  .slick-arrow {
    z-index: 999;
    width: 48px;
    height: 48px;
    transform: none;
    top: 100%;
    transform: translate(0, -100%);
    background-color: ${props => props.color};
    background-color: ${props => props.highlight};


    ${max(915)} {
      width: 40px;
      height: 72px;
      top: 50%;
      transform: translate(0, -50%);
      background-color: transparent;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;

    ${max(915)} {
      content: "";
      display: block;
      width: 40px;
      height: 72px;
      transition: all 0.3s ease-in-out;
    }
  }
  .slick-prev {
    mask-image: url("/banner/prev.svg");
    left: -50%;

    ${max(915)} {
      left: 0;
      mask-image: none;
    }
  }
  .slick-next {
    mask-image: url("/banner/next.svg");
    left: calc(-50% + 68px);

    ${max(915)} {
      left: calc(100% - 40px);
      mask-image: none;
    }
  }
  .slick-prev:before {
    background-image: url("/banner/prev.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .slick-next:before {
    background-image: url("/banner/next.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .slick-slide div {
  }
`;
export const SlideWrap = styled.div`
  position: relative;
  padding-right: 16px;
`;
export const SlideImg = styled.img`
  display: block;
  max-width: 100%;
  aspect-ratio: 16 / 9;
`;
export const PlayIcon = styled.i`
  display: block;
  font-size: 6rem;
  line-height: 6rem;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
`;
export const Arrow = styled.button`
  display: none;
`;
