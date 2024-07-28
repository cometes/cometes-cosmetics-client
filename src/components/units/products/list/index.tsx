import ProductsBannerWrap from "../../../commons/parts/products/banner";
import ProductsItemWrap from "../../../commons/parts/products/itemWrap";

export default function ProductsList(props) {
  return (
    <>
      <ProductsBannerWrap bg={props.bg} bannerData={props.bannerData} />
      <ProductsItemWrap
        listData={props.listData}
        count={props.count}
        category={props.category}
        sub={props.sub}
      />
    </>
  );
}
