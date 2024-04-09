import { GetStaticProps } from "next";
import { collectionLisa } from "../../../src/commons/libraries/array";
import CollectionMacLisa from "../../../src/components/units/collections/lisa";
import { useFetchCollection } from "../../../src/components/commons/hooks/queries/fetchCollection";

export default function MacLisaPage({ listData }) {
  return <CollectionMacLisa data={collectionLisa} listData={listData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: listData } = await useFetchCollection("LISA");

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
