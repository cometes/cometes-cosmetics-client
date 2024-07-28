import { GetServerSideProps } from "next";
import Cart from "../../../src/components/units/mypage/cart";
import { parseCookies } from "nookies";
import { useFetchGetShopping } from "../../../src/components/commons/hooks/queries/fetchGetShopping";

export default function CartPage({ listData }) {
  return <Cart listData={listData} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  // 쿠키 가져오기
  const cookies = parseCookies(context);
  const accessToken = cookies.accessToken; // accessToken 쿠키 가져오기

  try {
    const { data: listData } = await useFetchGetShopping(accessToken);

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
