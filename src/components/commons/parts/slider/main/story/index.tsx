import styled from "@emotion/styled";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { max } from "../../../../../../commons/libraries/breakPoints";

const StyledSlider = styled(SliderComponent)<{
  highlight?: string;
  color: string;
}>`
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
    outline: none;
  }
`;
const SlideImg = styled.img`
  display: block;
  max-width: 100%;
  aspect-ratio: 4 / 3;
  background-color: #ccc;
`;

export default function MainStory(props) {
  const settings = {
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: props.progress
    // responsive: [
    //   {
    //     breakpoint: 915,
    //     settings: {
    //       arrows: true,
    //       slidesToShow: 1,
    //       centerMode: true,
    //       centerPadding: "10%"
    //     }
    //   }
    // ]
  };

  return (
    <>
      <StyledSlider {...settings} color={props.color} ref={props.sliderRef}>
        {props.data.map(el => (
          <SlideImg src={el.img} />
        ))}
      </StyledSlider>
    </>
  );
}
