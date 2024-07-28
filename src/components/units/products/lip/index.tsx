import ProductsBannerWrap from "../../../commons/parts/products/banner";
import ProductsItemWrap from "../../../commons/parts/products/itemWrap";

export default function ProductsLip(props) {
  return (
    <>
      <ProductsBannerWrap
        bg={"/products/bg3.webp"}
        bannerData={props.bannerData}
      />
      <ProductsItemWrap
        listData={props.listData}
        count={props.count}
        category={"LIP"}
      />
    </>
  );
}
