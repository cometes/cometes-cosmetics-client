import { GetServerSideProps } from "next";
import Point from "../../../src/components/units/mypage/point";
import { parseCookies } from "nookies";
import { useFetchPayment } from "../../../src/components/commons/hooks/queries/fetchPayment";

export default function PointPage({ listData }) {
  return <Point listData={listData} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  // 쿠키 가져오기
  const cookies = parseCookies(context);
  const accessToken = cookies.accessToken; // accessToken 쿠키 가져오기

  try {
    const { data: listData } = await useFetchPayment("ALL", accessToken);

    console.log(listData);

    return {
      props: {
        listData
      }
    };
  } catch (error) {
    return {
      props: {
        listData: {
          point: 0,
          list: []
        }
      }
    };
  }
};
