import axios from "axios";

export async function useFetchOneOrder(
  accessToken: string,
  id: string | string[]
) {
  const request = await axios.get(
    `https://macproj.shop/order/fetchOneOrder?orderId=${id}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}
