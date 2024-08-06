import { GetStaticProps } from "next";
import Main from "../src/components/units/main";
import { useFetchCollection } from "../src/components/commons/hooks/queries/fetchCollection";
import { useFetchRecommendProduct } from "../src/components/commons/hooks/queries/fetchRecommendProduct";
import { useFetchInsta } from "../src/components/commons/hooks/queries/fetchInsta";

export default function MainPage({ newData, bestData }): JSX.Element {
  return <Main newData={newData} bestData={bestData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: newData } = await useFetchCollection("HOLIDAY");
    const { data: bestData } = await useFetchRecommendProduct();

    return {
      props: {
        newData,
        bestData
      }
    };
  } catch (error) {
    return {
      props: {
        newData: [],
        bestData: []
      }
    };
  }
};
