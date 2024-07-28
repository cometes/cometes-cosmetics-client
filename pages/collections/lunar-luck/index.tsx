import { GetStaticProps } from "next";
import { collectionLunar } from "../../../src/commons/libraries/array";
import { useCollection } from "../../../src/components/commons/hooks/custom/useCollection";
import CollectionLunarLuck from "../../../src/components/units/collections/lunar";
import { useFetchCollection } from "../../../src/components/commons/hooks/queries/fetchCollection";

export default function LunarLuckPage({ listData }) {
  return <CollectionLunarLuck data={collectionLunar} listData={listData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: listData } = await useFetchCollection("LUNAR");

    return {
      props: {
        listData
      }
    };
  } catch (error) {
    return {
      props: {
        listData: []
      }
    };
  }
};
