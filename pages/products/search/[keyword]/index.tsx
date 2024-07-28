import { GetServerSideProps } from "next";
import ProductsItemWrap from "../../../../src/components/commons/parts/products/itemWrap";
import ProductsList from "../../../../src/components/units/products/list";
import {
  useSearchProduct,
  useSearchProductCount
} from "../../../../src/components/commons/hooks/queries/searchProduct";
import SearchTop from "../../../../src/components/commons/parts/products/search";
import { useRouter } from "next/router";

export default function ProductsSearchPage({ listData, count, keyword }) {
  const router = useRouter();
  return (
    <>
      <SearchTop keyword={router.query.keyword} />
      <ProductsItemWrap listData={listData} count={count} keyword={router.query.keyword} isSearch={true}/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const url = context.resolvedUrl.split("/");
  const keyword = url[3];

  try {
    const { data: listData } = await useSearchProduct(keyword, 1);
    const { data: count } = await useSearchProductCount(keyword);

    return {
      props: {
        listData,
        count,
        keyword
      }
    };
  } catch (error) {
    return {
      props: {
        listData: [],
        count: 0,
        keyword
      }
    };
  }
};
