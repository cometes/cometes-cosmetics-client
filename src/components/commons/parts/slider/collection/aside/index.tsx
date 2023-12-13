import styled from "@emotion/styled";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { max } from "../../../../../../commons/libraries/breakPoints";

const StyledSlider = styled(SliderComponent)`
  height: calc(100vh - 80px);
`;
const SlideImg = styled.img`
  display: block;
  width: 100%;
  height: calc(100vh - 80px);
  object-fit: cover;
  object-position: 50% 50%;
`;

export default function CollectionAside(props) {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out"
  };
  return (
    <StyledSlider {...settings}>
      {props.data?.map(el => (
        <SlideImg src={el} alt="image" />
      ))}
    </StyledSlider>
  );
}
