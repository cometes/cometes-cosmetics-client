import { GetStaticProps } from "next";
import { collectionHoliday } from "../../../src/commons/libraries/array";
import CollectionHoliday from "../../../src/components/units/collections/holiday";
import { useFetchCollection } from "../../../src/components/commons/hooks/queries/fetchCollection";

export default function HolidayPage({ listData }) {
  return <CollectionHoliday data={collectionHoliday} listData={listData} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: listData } = await useFetchCollection("HOLIDAY");

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
