import { GetServerSideProps } from "next";
import Order from "../../../../src/components/units/order";
import { useFetchRecommendProduct } from "../../../../src/components/commons/hooks/queries/fetchRecommendProduct";

export default function OrderCompletePage({ recommendData }) {
  return <Order isComplete={true} data={recommendData?.data} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: recommendData } = await useFetchRecommendProduct();
    console.log(recommendData);

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
