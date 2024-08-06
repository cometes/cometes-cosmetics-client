import instance from "../../../../../commons/libraries/axios";

export async function useFetchPayment(path: string, accessToken: string) {
  const request = await instance.get(
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
