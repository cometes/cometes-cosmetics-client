import axios from "axios";

export async function useFetchPayment(path: string, accessToken: string) {
  const request = await axios.get(
    `https://macproj.shop/payment/getPaymentList/${path}`,
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
