import { GetStaticProps } from "next";
import { useFetchBanner } from "../../../src/components/commons/hooks/queries/fetchBanner";
import {
  useFetchProducts,
  useFetchProductsCount
} from "../../../src/components/commons/hooks/queries/fetchProducts";
import ProductsList from "../../../src/components/units/products/list";

export default function ProductsNewPage({ bannerData, listData, count }) {
  return (
    <ProductsList
      bannerData={bannerData}
      listData={listData}
      count={count}
      bg={"/products/bg8.webp"}
      category={"NEW"}
      sub={""}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: bannerData } = await useFetchBanner("NEW");
    const { data: listData } = await useFetchProducts("NEW", 1);
    const { data: count } = await useFetchProductsCount("NEW");

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
