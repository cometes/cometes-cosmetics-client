import instance from "../../../../../commons/libraries/axios";

export async function useFetchRecommendProduct() {
  const request = await instance.get(
    `https://macproj.shop/product/recommendProduct`
  );
  const response = await request.data;
  const data = response;

  return {
    data
  };
}
