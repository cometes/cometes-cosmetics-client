import { GetStaticProps } from "next";
import { useFetchBanner } from "../../../src/components/commons/hooks/queries/fetchBanner";
import {
  useFetchProducts,
  useFetchProductsCount
} from "../../../src/components/commons/hooks/queries/fetchProducts";
import ProductsList from "../../../src/components/units/products/list";

export default function ProductsEyePage({ bannerData, listData, count }) {
  return (
    <ProductsList
      bannerData={bannerData}
      listData={listData}
      count={count}
      category={"EYE"}
      bg={"/products/bg5.webp"}
      sub={""}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: bannerData } = await useFetchBanner("EYE");
    const { data: listData } = await useFetchProducts("EYE", 1);
    const { data: count } = await useFetchProductsCount("EYE");

    return {
      props: {
        bannerData,
        listData,
        count
      }
    };
  } catch (error) {
    return {
      props: {
        bannerData: [],
        listData: [],
        count: 0
      }
    };
  }
};
