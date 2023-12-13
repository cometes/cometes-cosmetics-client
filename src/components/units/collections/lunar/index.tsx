import CollectionWrap from "../../../commons/parts/collection/asideWrap";
import CollectionItemWrap from "../../../commons/parts/collection/itemWrap";

export default function CollectionLunarLuck(props) {
  return (
    <CollectionWrap data={props.data}>
      <CollectionItemWrap data={props.data?.main} />
    </CollectionWrap>
  );
}
