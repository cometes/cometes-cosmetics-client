import { GetStaticProps } from "next";
import { useFetchBanner } from "../../../src/components/commons/hooks/queries/fetchBanner";
import {
  useFetchProducts,
  useFetchProductsCount
} from "../../../src/components/commons/hooks/queries/fetchProducts";
import ProductsList from "../../../src/components/units/products/list";

export default function ProductsAllPage({ bannerData, listData, count }) {
  return (
    <ProductsList
      bannerData={bannerData}
      listData={listData}
      count={count}
      bg={"/products/bg7.webp"}
      category={"ALL"}
      sub={""}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: bannerData } = await useFetchBanner("ALL");
    const { data: listData } = await useFetchProducts("ALL", 1);
    const { data: count } = await useFetchProductsCount("ALL");

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
