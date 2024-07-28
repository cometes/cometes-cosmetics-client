import { GetServerSideProps } from "next";
import { useFetchBanner } from "../../../../src/components/commons/hooks/queries/fetchBanner";
import {
  useFetchProducts,
  useFetchProductsCount
} from "../../../../src/components/commons/hooks/queries/fetchProducts";
import ProductsList from "../../../../src/components/units/products/list";
import { useRouter } from "next/router";

export default function ProductsLipPage({ bannerData, listData, count }) {
  const router = useRouter();

  return (
    <ProductsList
      bannerData={bannerData}
      listData={listData}
      count={count}
      category={"FACE"}
      bg={"/products/bg4.webp"}
      sub={String(router.query.sub).toUpperCase()}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const url = context.resolvedUrl.split("/");
  const subCategory = url[url.length - 2].toUpperCase();

  try {
    const { data: bannerData } = await useFetchBanner("FACE");
    const { data: listData } = await useFetchProducts(subCategory, 1);
    const { data: count } = await useFetchProductsCount(subCategory);

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
