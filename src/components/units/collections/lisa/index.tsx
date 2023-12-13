import CollectionWrap from "../../../commons/parts/collection/asideWrap";
import CollectionBannerWrap from "../../../commons/parts/collection/bannerWrap";
import CollectionFlexWrap from "../../../commons/parts/collection/flexWrap";
import CollectionFullItemSlickWrap from "../../../commons/parts/collection/full-ItemSlickWrap";
import CollectionHelpWrap from "../../../commons/parts/collection/helpWrap";
import CollectionItemSlickWrap from "../../../commons/parts/collection/itemSlickWrap";
import CollectionLookBookWrap from "../../../commons/parts/collection/lookBookWrap";
import CollectionVideoWrap from "../../../commons/parts/collection/videoWrap";

export default function CollectionMacLisa(props) {
  return (
    <CollectionWrap data={props.data} color={props.data.color}>
      <CollectionItemSlickWrap data={props.data.main} />
      <CollectionFlexWrap data={props.data?.flex} />
      <CollectionBannerWrap data={props.data?.banner} />
      <CollectionLookBookWrap data={props.data?.lookbook} />
      <CollectionFullItemSlickWrap data={props.data?.full} />
      <CollectionVideoWrap data={props.data?.video} />
      <CollectionHelpWrap />
    </CollectionWrap>
  );
}
