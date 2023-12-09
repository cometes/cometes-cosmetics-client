import CollectionWrap from "../../../commons/parts/collection/asideWrap";
import CollectionItemWrap from "../../../commons/parts/collection/itemWrap";
import CollectionVideoWrap from "../../../commons/parts/collection/videoWrap";

export default function CollectionHoliday(props) {
  return (
    <CollectionWrap data={props.data}>
      <CollectionItemWrap data={props.data?.main} />
      <CollectionVideoWrap data={props.data?.video} />
    </CollectionWrap>
  );
}
