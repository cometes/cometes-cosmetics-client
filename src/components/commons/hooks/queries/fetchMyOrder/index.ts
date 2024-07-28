import axios from "axios";

export async function useFetchMyOrder(accessToken: string) {
  const request = await axios.get(`https://macproj.shop/order/fetchMyOrder`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}
