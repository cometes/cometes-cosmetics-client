import styled from "@emotion/styled";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { max, min } from "../../../../../commons/libraries/breakPoints";

export const Fullbanner = styled.div`
  ${max(1000)} {
    display: none;
  }
  ${min(1000)} {
    display: block;
  }
`;
export const Mobilebanner = styled.div`
  ${max(1000)} {
    display: block;
  }
  ${min(1000)} {
    display: none;
  }
`;
export const StyledSlider = styled(SliderComponent)`
  .slick-list {
    height: 100vh;

    ${max(1000)} {
      height: auto;
    }
  }
  .slick-slide div {
    outline: none;
  }
  .slick-arrow {
    z-index: 997;
    width: 60px;
    height: 100px;
    transform: none;
    top: 50%;
    transform: translate(0, -50%);
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: block;
    width: 60px;
    height: 100px;
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
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
`;
export const SlideWrap = styled.div`
  position: relative;
`;
export const SlideItem = styled.div<{
  img: string;
  img2: string;
}>`
  display: block;
  width: 100%;
  height: 100vh;
  background: ${props => `url(${props.img}) no-repeat center / cover`};

  ${max(1000)} {
    height: 100vh;
    background: ${props => `url(${props.img2}) no-repeat center / cover`};
  }
`;
export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 40px 60px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  top: 0;
  left: 0;

  ${max(768)} {
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 24px 60px 24px;
  }
`;
export const TextBox = styled.div`
  width: fit-content;
`;
export const Badge = styled.p`
  font-size: 2.4rem;
  color: ${props => props.color};

  ${max(768)} {
    font-size: 2rem;
  }
`;
export const Title = styled.p`
  font-size: 5rem;
  margin-top: 30px;
  word-break: keep-all;
  color: ${props => props.color};
  font-family: "AritaBuri", sans-serif;

  ${max(768)} {
    font-size: 4rem;
    margin-top: 20px;
  }
`;
export const SubTitle = styled.p`
  max-width: 500px;
  font-size: 2rem;
  line-height: 2.8rem;
  margin-top: 20px;
  word-break: keep-all;
  color: ${props => props.color};

  ${max(768)} {
    max-width: 100%;
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;
export const MoreBtn = styled.button`
  font-family: "Raleway", sans-serif;
  display: flex;
  position: relative;
  align-items: center;
  background-color: #111;
  border: none;
  padding: 16px 20px;
  border-radius: 25px;
  margin-top: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: #fff;
    & span,
    svg {
      color: #111;
    }
  }
`;
export const MoreBtnText = styled.span`
  display: block;
  color: #fff;
  font-size: 1.6rem;
  transition: all ease-in-out 0.2s;
`;
export const MoreBtnArrow = styled(FontAwesomeIcon)`
  display: block;
  color: #fff;
  margin-left: 16px;
  transition: all ease-in-out 0.2s;
`;
export const SlidePageBox = styled.div`
  display: flex;
  align-items: flex-end;

  ${max(768)} {
    width: 100%;
    justify-content: flex-end;
  }
`;
export const SlideCurrentPage = styled.span`
  display: block;
  font-size: 6rem;
  line-height: 6rem;
  color: ${props => props.color};
  font-family: "AritaBuri";
  font-weight: 400;

  ${max(768)} {
    font-size: 5rem;
  }
`;
export const SlidePageLength = styled.span`
  display: block;
  font-size: 3.6rem;
  line-height: 3.6rem;
  color: ${props => props.color};
  font-family: "AritaBuri";
  font-weight: 400;
  padding-bottom: 3px;
  margin-left: 3px;

  ${max(768)} {
    font-size: 3rem;
  }
`;
