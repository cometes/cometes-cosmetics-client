import styled from "@emotion/styled";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSlickArrow } from "../../../hooks/custom/useSlickArrow";
import { useState } from "react";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";

const StyledSlider = styled(SliderComponent)`
  .slick-slide div {
    outline: none;
  }
`;
const SlideWrap = styled.div`
  color: #fff;
  text-align: center;
`;
const SlideImg = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-position: 50% 50%;
  object-fit: cover;
  cursor: pointer;
`;
const ItemTitle = styled.p`
  margin-top: 10px;
  word-break: keep-all;
`;
const ItemPrice = styled.span`
  display: block;
  margin-top: 16px;
`;
const ProgressBarWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;
const ProgressBarBox = styled.div<{
  progress: number;
}>`
  width: 100%;
  height: 2px;
  background: #fff;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => `${props.progress}%`};
    height: 100%;
    background-color: #af3832;
    transition: all 0.5s ease-in-out;
  }
`;
const ArrowWrap = styled.div`
  display: flex;
  margin-left: 20px;
`;
const ArrowBox = styled.div`
  &:last-of-type {
    margin-left: 6px;
  }
`;
const ArrowImg = styled.button`
  display: block;
  width: 36px;
  height: 36px;
  background: #fff;
  cursor: pointer;

  &.prev {
    mask-image: url("/banner/prev.svg");
    mask-size: cover;
  }
  &.next {
    mask-image: url("/banner/next.svg");
    mask-size: cover;
  }
`;

export default function ProductSlick(props) {
  const { sliderRef, previous, next } = useSlickArrow();
  const [progressBar, setProgressBar] = useState(0);

  const progress = (_, newIndex: number) => {
    const calc = (newIndex / (props.data?.length - 1)) * 100;
    setProgressBar(calc);
  };

  const { onClickMoveToPage } = useMoveToPage();

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    beforeChange: progress,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <>
      <StyledSlider {...settings} ref={sliderRef}>
        {props.data?.map(el => (
          <SlideWrap
            onClick={onClickMoveToPage(
              `/products/${el.mainCategory.toLowerCase()}/${el.subCategory.toLowerCase()}/item/${
                el.id
              }`
            )}
          >
            <SlideImg src={el.thumbnail} />
            <ItemTitle>{el.name}</ItemTitle>
            <ItemPrice>₩ {el.price.toLocaleString()}</ItemPrice>
          </SlideWrap>
        ))}
      </StyledSlider>
      <ProgressBarWrap>
        <ProgressBarBox progress={progressBar} />
        <ArrowWrap>
          <ArrowBox onClick={previous}>
            <ArrowImg className="prev" />
          </ArrowBox>
          <ArrowBox onClick={next}>
            <ArrowImg className="next" />
          </ArrowBox>
        </ArrowWrap>
      </ProgressBarWrap>
    </>
  );
}
