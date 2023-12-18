import {
  arr,
  storyData
} from "../../../commons/libraries/array";
import MainItemSlickWrap from "../../commons/parts/main/itemSlickWrap";
import MainStoryWrap from "../../commons/parts/main/storyWrap";
import MainVideoWrap from "../../commons/parts/main/videoWrap";
import MainVisual from "../../commons/parts/slider/mainVisual";
import MainCollectionWrap from "../../commons/parts/main/collectionWrap";
import MainSloganWrap from "../../commons/parts/main/sloganWrap";
import MainMoreWrap from "../../commons/parts/main/moreWrap";
import MainInstaWrap from "../../commons/parts/main/instaWrap";

export default function Main() {
  return (
    <>
      <MainVisual />
      <MainItemSlickWrap data={arr} title="BEST" />
      <MainCollectionWrap />
      <MainItemSlickWrap data={arr} title="NEW" />
      <MainVideoWrap />
      <MainSloganWrap />
      <MainStoryWrap data={storyData} />
      <MainMoreWrap />
      <MainInstaWrap />
    </>
  );
}
