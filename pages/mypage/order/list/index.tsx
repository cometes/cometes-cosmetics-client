import { GetServerSideProps } from "next";
import OrderList from "../../../../src/components/units/mypage/order/list";
import { parseCookies } from "nookies";
import { useFetchMyOrder } from "../../../../src/components/commons/hooks/queries/fetchMyOrder";

export default function OrderListPage({ listData }) {
  return <OrderList listData={listData} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  // 쿠키 가져오기
  const cookies = parseCookies(context);
  const accessToken = cookies.accessToken; // accessToken 쿠키 가져오기

  try {
    const { data: listData } = await useFetchMyOrder(accessToken);

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
          sum: 0,
          list: []
        }
      }
    };
  }
};
