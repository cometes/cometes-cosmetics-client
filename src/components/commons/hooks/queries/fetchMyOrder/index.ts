import instance from "../../../../../commons/libraries/axios";

export async function useFetchMyOrder(accessToken: string) {
  const request = await instance.get(
    `https://macproj.shop/order/fetchMyOrder`,
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
