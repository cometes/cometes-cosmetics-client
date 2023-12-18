import styled from "@emotion/styled";

export const CollectionSection = styled.section`
  margin-top: 180px;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    left: 0px;
    top: 200px;
    width: calc(100vw - 8px);
    margin-left: calc(-50vw + 50%);
    height: 2300px;
    background-color: #fafafa;
    content: "";
  }
`;
export const CollectionWrap = styled.div`
  position: relative;
  z-index: 10;

  &:not(:first-of-type) {
    margin-top: 200px;
  }
`;
export const CollectionBannerWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const CollectionBanner = styled.div`
  position: relative;
`;
export const CollectionBannerImg = styled.img`
  display: block;
  max-width: 1200px;
  max-height: 560px;
  object-fit: cover;
  width: 100%;

  &.vertical {
    max-width: 560px;
    max-height: 100%;
    aspect-ratio: 3 / 4;
  }
  &.left {
    margin-top: 100px;
  }
  &.right {
    margin-bottom: 100px;
  }
`;
export const CollectionDeco = styled.span`
  display: block;
  font-size: 15rem;
  font-family: "AritaBuri", sans-serif;
  letter-spacing: -1.5rem;
  text-transform: uppercase;
  font-weight: 300;
  position: absolute;
  z-index: 20;
  color: ${props => props.color};

  &.left {
    left: -10%;
  }
  &.right {
    bottom: 0;
    left: -20%;
  }
`;
export const CollectionTextWrap = styled.div`
  &.vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const CollectionTitle = styled.h3`
  font-family: "AritaBuri", sans-serif;
  font-size: 6rem;
  line-height: 6rem;
  font-weight: 500;
  margin-top: 50px;
`;
export const CollectionContent = styled.p`
  margin-top: 10px;
  font-size: 1.8rem;
  line-height: 2.4rem;
`;
