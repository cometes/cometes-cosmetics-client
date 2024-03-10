import ProductsBannerWrap from "../../../commons/parts/products/banner";
import ProductsBestItemWrap from "../../../commons/parts/products/bestItemWrap";

export default function ProductsBest(props) {
  return (
    <>
      <ProductsBannerWrap bg={props.bg} bannerData={props.bannerData} />
      <ProductsBestItemWrap />
    </>
  );
}
