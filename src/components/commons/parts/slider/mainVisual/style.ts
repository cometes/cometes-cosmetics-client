import styled from "@emotion/styled";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledSlider = styled(SliderComponent)`
  .slick-list {
    height: 100vh;
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
export const Fullbanner = styled.div``;
export const Mobilebanner = styled.div``;
export const SlideWrap = styled.div`
  position: relative;
`;
export const SlideItem = styled.img`
  display: block;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: 25% 50%;
`;
export const TextBox = styled.div`
  width: 500px;
  position: absolute;
  bottom: 10%;
  right: 5%;
`;
export const Badge = styled.p`
  font-size: 2.4rem;
  color: ${props => props.color};
`;
export const Title = styled.p`
  font-size: 5rem;
  margin-top: 30px;
  word-break: keep-all;
  color: ${props => props.color};
  font-family: "AritaBuri";
`;
export const SubTitle = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
  margin-top: 20px;
  word-break: keep-all;
  color: ${props => props.color};
`;
export const MoreBtn = styled.button`
  display: flex;
  position: relative;
  align-content: center;
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
  position: absolute;
  left: 8%;
  bottom: 6%;
`;
export const SlideCurrentPage = styled.span`
  display: block;
  font-size: 6rem;
  line-height: 6rem;
  color: ${props => props.color};
  font-family: "AritaBuri";
  font-weight: 400;
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
`;
