import styled from "@emotion/styled";
import { Image } from "antd";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0 20px;
`;
export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const ItemImgBox = styled.div`
  position: relative;
  display: flex;
  background-color: #f7f7f7;
  border-radius: 6px;
  width: 100%;
aspect-ratio: 1 / 1;
  max-height: 170px;
`;
export const ItemImg = styled(Image)`
  aspect-ratio: 1 / 1;
`;
export const HeartBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d7d7d7;
  background-color: #fff;
  position: absolute;
  z-index: 999;
  bottom: 0;
  right: 0;
`;
export const Heart = styled.i`
  font-size: 3rem;
  line-height: 3rem;
  height: 3rem;
  display: block;
  color: #d86565;
`;
export const ItemTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 400;
  color: #333;
  margin-top: 20px;
`;
export const ItemPrice = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 4px;
`;
