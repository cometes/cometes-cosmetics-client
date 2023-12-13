import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";
import { mainVisualItem } from "../../../../../commons/libraries/array";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";

export default function MainVisual() {
  const { onClickMoveToPage } = useMoveToPage();
  const settings = {
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <S.Fullbanner>
        <S.StyledSlider {...settings}>
          {mainVisualItem.map((el, idx) => (
            <S.SlideWrap key={idx}>
              <S.SlideItem src={el.image} />
              <S.SlidePageBox>
                <S.SlideCurrentPage color={el.color}>
                  {idx + 1}
                </S.SlideCurrentPage>
                <S.SlidePageLength color={el.color}>{`/${String(
                  mainVisualItem.length
                ).padStart(2, "0")}`}</S.SlidePageLength>
              </S.SlidePageBox>
              <S.TextBox>
                <S.Badge color={el.color}>{el.badge}</S.Badge>
                <S.Title color={el.color}>{el.title}</S.Title>
                <S.SubTitle color={el.color}>{el.content}</S.SubTitle>
                <S.MoreBtn onClick={onClickMoveToPage(el.url)}>
                  <S.MoreBtnText>View More</S.MoreBtnText>
                  <S.MoreBtnArrow icon={faChevronRight} />
                </S.MoreBtn>
              </S.TextBox>
            </S.SlideWrap>
          ))}
        </S.StyledSlider>
      </S.Fullbanner>
      <S.Mobilebanner></S.Mobilebanner>
    </>
  );
}
