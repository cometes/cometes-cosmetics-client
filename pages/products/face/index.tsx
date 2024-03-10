import { GetStaticProps } from "next";
import { useFetchBanner } from "../../../src/components/commons/hooks/queries/fetchBanner";
import {
  useFetchProducts,
  useFetchProductsCount
} from "../../../src/components/commons/hooks/queries/fetchProducts";
import ProductsList from "../../../src/components/units/products/list";

export default function ProductsFacePage({ bannerData, listData, count }) {
  return (
    <ProductsList
      bannerData={bannerData}
      listData={listData}
      count={count}
      category={"FACE"}
      bg={"/products/bg4.webp"}
      sub={""}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: bannerData } = await useFetchBanner("FACE");
    const { data: listData } = await useFetchProducts("FACE", 1);
    const { data: count } = await useFetchProductsCount("FACE");

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
