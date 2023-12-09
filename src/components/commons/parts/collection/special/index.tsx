import CollectionHelpWrap from "../helpWrap";
import CollectionBannerWrap from "./bannerWrap";
import CollectionFlexWrap from "./flexWrap";
import CollectionFullItemWrap from "./full-ItemWrap";
import CollectionItemWrap from "./itemWrap";
import CollectionLookBookWrap from "./lookBookWrap";
import CollectionVideoWrap from "./videoWrap";
import * as S from "../style";
import CollectionAside from "../../slider/collection/aside";

export default function CollectionSpecial(props) {
  return (
    <S.FlexWrap>
      <S.AsideWrap>
        <S.AsideBox>
          <CollectionAside data={props.data.aside} />
        </S.AsideBox>
        <S.AsideImg src={props.data.horizontal} />
      </S.AsideWrap>
      <S.Wrapper color={props.data.color}>
        <CollectionItemWrap data={props.data.main} color={props.data.color} />
        <CollectionFlexWrap data={props.data.flex} />
        <CollectionBannerWrap data={props.data.banner} />
        <CollectionLookBookWrap data={props.data.lookbook} />
        <CollectionFullItemWrap
          data={props.data.full}
          color={props.data.color}
        />
        <CollectionVideoWrap data={props.data.video} color={props.data.color} />
        <CollectionHelpWrap />
      </S.Wrapper>
    </S.FlexWrap>
  );
}
