import { GetServerSideProps } from "next";
import ProductsDetail from "../../../../../../src/components/units/detail";
import { useFetchDetailProduct } from "../../../../../../src/components/commons/hooks/queries/fetchDetailProduct";

export default function ProductsDetailPage({ detailData }) {
  return <ProductsDetail detailData={detailData} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const { data: detailData } = await useFetchDetailProduct(context.query.id);

    return {
      props: {
        detailData
      }
    };
  } catch (error) {
    return {
      props: {
        detailData: {}
      }
    };
  }
};
