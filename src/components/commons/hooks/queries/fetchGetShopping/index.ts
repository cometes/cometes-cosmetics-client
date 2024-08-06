import instance from "../../../../../commons/libraries/axios";

export async function useFetchGetShopping(accessToken) {
  const request = await instance.get(
    `https://macproj.shop/shopping/getShopping`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  const response = await request.data;
  const data = response;

  return {
    data
  };
}
