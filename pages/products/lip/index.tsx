import { GetStaticProps } from "next";
import { useFetchBanner } from "../../../src/components/commons/hooks/queries/fetchBanner";
import {
  useFetchProducts,
  useFetchProductsCount
} from "../../../src/components/commons/hooks/queries/fetchProducts";
import ProductsList from "../../../src/components/units/products/list";

export default function ProductsLipPage({ bannerData, listData, count }) {
  return (
    <ProductsList
      bannerData={bannerData}
      listData={listData}
      count={count}
      category={"LIP"}
      bg={"/products/bg3.webp"}
      sub={""}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: bannerData } = await useFetchBanner("LIP");
    const { data: listData } = await useFetchProducts("LIP", 1);
    const { data: count } = await useFetchProductsCount("LIP");

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
