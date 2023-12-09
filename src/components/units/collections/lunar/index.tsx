import { collectionLunar } from "../../../../commons/libraries/array";
import CollectionWrap from "../../../commons/parts/collection/asideWrap";
import CollectionDefault from "../../../commons/parts/collection/default";
import CollectionItemWrap from "../../../commons/parts/collection/itemWrap";

export default function CollectionLunarLuck(props) {
  return (
    <CollectionWrap data={props.data}>
      <CollectionItemWrap data={props.data?.main} />
    </CollectionWrap>
  );
}
