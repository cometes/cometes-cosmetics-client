import instance from "../../../../../commons/libraries/axios";

export async function useFetchBanner(category: string) {
  const request = await instance.get(
    `https://macproj.shop/product/fetchBanner?category=${category}`
  );
  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}
