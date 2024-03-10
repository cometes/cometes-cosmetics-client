import { GetStaticProps } from "next";
import ProductsBest from "../../../src/components/units/products/best";
import { useFetchBanner } from "../../../src/components/commons/hooks/queries/fetchBanner";
import { useFetchProducts } from "../../../src/components/commons/hooks/queries/fetchProducts";

export default function ProductsBestPage({ bannerData, listData }) {
  return (
    <ProductsBest
      bannerData={bannerData}
      listData={listData}
      bg={"/products/bg1.webp"}
      category={"BEST"}
      sub={""}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: bannerData } = await useFetchBanner("BEST");
    const { data: listData } = await useFetchProducts("BEST", 1);

    return {
      props: {
        bannerData,
        listData
      }
    };
  } catch (error) {
    return {
      props: {
        bannerData: [],
        listData: []
      }
    };
  }
};
