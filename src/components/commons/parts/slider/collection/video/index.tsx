import * as S from "./style";

export default function CollectionVideo(props) {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <S.Arrow />,
    nextArrow: <S.Arrow />,
    responsive: [
      {
        breakpoint: 915,
        settings: {
          arrows: true,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%"
        }
      }
    ]
  };

  return (
    <>
      <S.StyledSlider {...settings} color={props.color} ref={props.sliderRef}>
        {props.data?.map(el => (
          <S.SlideWrap>
            <S.PlayIcon className="fi fi-tr-play-circle" />
            <S.SlideImg src={el} />
          </S.SlideWrap>
        ))}
      </S.StyledSlider>
    </>
  );
}
