import { GetServerSideProps } from "next";
import OrderDetail from "../../../../src/components/units/mypage/order/detail";
import { useFetchOneOrder } from "../../../../src/components/commons/hooks/queries/fetchOneOrder";
import { parseCookies } from "nookies";

export default function OrderDetailPage({ detailData }) {
  return <OrderDetail detailData={detailData} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  // 쿠키 가져오기
  const cookies = parseCookies(context);
  const accessToken = cookies.accessToken; // accessToken 쿠키 가져오기

  try {
    const { data: detailData } = await useFetchOneOrder(
      accessToken,
      context.query.id
    );

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
