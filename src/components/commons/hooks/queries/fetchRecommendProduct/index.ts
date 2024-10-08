import axios from "axios";

export async function useFetchRecommendProduct() {
  const request = await axios.get(
    `https://macproj.shop/product/recommendProduct`
  );
  const response = await request.data;
  const data = response;

  return {
    data
  };
}
