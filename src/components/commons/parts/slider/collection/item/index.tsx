import styled from "@emotion/styled";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { max } from "../../../../../../commons/libraries/breakPoints";
import CollectionItem from "../../../item/collection";

const StyledSlider = styled(SliderComponent)<{
  highlight: string;
  color: string;
}>`
  .slick-dots {
    position: relative;
    bottom: 0;
    margin-top: 16px;
  }
  .slick-dots li button::before {
    color: ${props => props.highlight};
  }

  .slick-arrow {
    z-index: 999;
    width: 48px;
    height: 48px;
    transform: none;
    top: 0;
    transform: translate(0, -100%);
    background-color: ${props => props.color};
    background-color: ${props => props.highlight};
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: block;
    width: 48px;
    height: 48px;
    transition: all 0.3s ease-in-out;

    display: none;
  }
  .slick-prev {
    mask-image: url("/banner/prev.svg");
    left: calc(100% - 100px);
  }
  .slick-next {
    right: 0;
    mask-image: url("/banner/next.svg");
  }

  .slick-slide div {
    outline: none;
  }
`;
const ItemBox = styled.div`
  padding: 6px;
`;

export default function CollectionItemSlick(props) {
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  return (
    <StyledSlider
      {...settings}
      highlight={props.highlight}
      color={props.color}
      ref={props.sliderRef}
    >
      {props.data?.map(el => (
        <ItemBox>
          <CollectionItem data={el} highlight={props.highlight} />
        </ItemBox>
      ))}
    </StyledSlider>
  );
}
