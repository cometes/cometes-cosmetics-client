import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { MainTextBtn } from "../main/style";
import * as S from "./style";

export default function AllCollection() {
  const collectionArr = [
    {
      img: "/collection/holiday/holiday-vertical1.webp",
      title: "2023 MAC Holiday",
      url: "/collections/mac-2023-holiday/"
    },
    {
      img: "/collection/lisa/lisa-vertical4.webp",
      title: "MAC X L Collection",
      url: "/collections/mac-lisa/"
    },
    {
      img: "/banner/mobile/banner3.png",
      title: "VIVA GLAM CAMPAIGN",
      url: ""
    },
    {
      img: "/banner/mobile/banner4.png",
      title: "Re: Think Pink!",
      url: ""
    },
    {
      img: "/collection/lunar/lunar-vertical.webp",
      title: "Lunar New Year",
      url: "/collections/lunar-luck"
    }
  ];

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      {collectionArr.map(el => (
        <S.Thumbnail bg={el.img}>
          <S.Title>{el.title}</S.Title>
          <S.TextBtn onClick={onClickMoveToPage(el.url)}>VIEW MORE</S.TextBtn>
        </S.Thumbnail>
      ))}
    </S.Wrapper>
  );
}
