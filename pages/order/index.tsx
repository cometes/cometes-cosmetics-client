import { GetServerSideProps } from "next";
import Order from "../../src/components/units/order";
import { useFetchRecommendProduct } from "../../src/components/commons/hooks/queries/fetchRecommendProduct";

export default function OrderPage({ recommendData }) {
  return <Order isComplete={false} data={recommendData?.data} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: recommendData } = await useFetchRecommendProduct();

    return {
      props: {
        recommendData
      }
    };
  } catch (error) {
    return {
      props: {
        recommendData: []
      }
    };
  }
};
