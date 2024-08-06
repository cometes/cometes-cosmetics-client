import { GetStaticProps } from "next";
// import { useCollection } from "../src/components/commons/hooks/custom/useCollection";
// import { useRecommend } from "../src/components/commons/hooks/custom/useRecommend";
import Main from "../src/components/units/main";
import { useFetchCollection } from "../src/components/commons/hooks/queries/fetchCollection";
import { useFetchRecommendProduct } from "../src/components/commons/hooks/queries/fetchRecommendProduct";
import { useFetchInsta } from "../src/components/commons/hooks/queries/fetchInsta";

export default function MainPage({
  newData,
  bestData,
  instaData
}): JSX.Element {
  return <Main newData={newData} bestData={bestData} instaData={instaData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: newData } = await useFetchCollection("HOLIDAY");
    const { data: bestData } = await useFetchRecommendProduct();
    const { data: instaData } = await useFetchInsta();

    return {
      props: {
        newData,
        bestData,
        instaData
      }
    };
  } catch (error) {
    return {
      props: {
        newData: [],
        bestData: [],
        instaData: []
      }
    };
  }
};
