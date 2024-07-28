import styled from "@emotion/styled";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { max } from "../../../../../commons/libraries/breakPoints";

const StyledSlider = styled(SliderComponent)`
  height: calc(100vh - 80px);
  overflow: hidden;

  ${max(1000)} {
    height: auto;
    aspect-ratio: 4 / 3;
  }
  ${max(768)} {
    height: auto;
    aspect-ratio: 1 / 1;
  }

  &:hover {
    .slick-arrow.slick-prev {
      left: 0;
    }
    .slick-arrow.slick-next {
      right: 0;
    }
  }
  .slick-slide div {
    outline: none;
  }

  // arrow
  .slick-arrow {
    z-index: 997;
    width: 40px;
    height: 40px;
    transform: none;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 0.3s ease-in-out;
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: block;
    width: 40px;
    height: 40px;
  }
  .slick-prev {
    left: -40px;
  }
  .slick-next {
    right: -40px;
  }
  .slick-prev:before {
    background-image: url("/banner/prev2.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .slick-next:before {
    background-image: url("/banner/next2.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  //dots
  .slick-dots.slick-thumb {
    width: auto;
    height: fit-content;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    display: flex !important;
    flex-direction: column;

    li {
      margin: 0;
      width: 68px;
      height: 68px;
      position: relative;
      margin-bottom: 5px;
      overflow: hidden;

      &:last-of-type {
        margin-bottom: 0;
      }
      &:not(.slick-active) {
        border: 1px solid #d9d9d9;
      }
    }
  }
  li.slick-active::before {
    content: "";
    width: 68px;
    height: 68px;
    display: block;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    border: 4px solid #fff;
    box-sizing: border-box;
  }
`;
const SlideImg = styled.img`
  display: block;
  width: 100%;
  height: calc(100vh - 80px);
  object-fit: cover;
  object-position: 50% 50%;
  background-color: #e7e8ea;

  ${max(1000)} {
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }
  ${max(768)} {
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;
const PaginationImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  background-color: #e7e8ea;
`;

const ProgressBarWrap = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  width: 80%;
  display: flex;
  align-items: center;
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

export default function DetailSlick(props) {
  const [progressBar, setProgressBar] = useState(0);
  const [data, setData] = useState([]);

  const sliderRef = useRef(null);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    if (props.selected?.image !== "") {
      setData([
        { gallery: props.selected?.image },
        { gallery: props.selected?.texture },
        ...props.data
      ]);
      sliderRef.current.slickGoTo(0);
    } else {
      setData(props.data);
      sliderRef.current.slickGoTo(0);
    }
  }, [props.selected]);

  const progress = (_, newIndex: number) => {
    const calc = (newIndex / (data?.length - 1)) * 100;
    setProgressBar(calc);
  };

  const settings = {
    arrows: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    autoplay: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    beforeChange: progress,
    customPaging: (i: string | number) => {
      return <PaginationImg src={data[i]?.gallery} />;
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  };

  return (
    <>
      <StyledSlider {...settings} ref={sliderRef}>
        {data?.map((el, idx) => (
          <SlideImg
            key={idx}
            src={el?.gallery}
            className={
              props.selected?.product !== "" && idx <= 1 ? "resize" : ""
            }
          />
        ))}
      </StyledSlider>
      <ProgressBarWrap>
        <ProgressBarBox progress={progressBar} />
      </ProgressBarWrap>
    </>
  );
}
