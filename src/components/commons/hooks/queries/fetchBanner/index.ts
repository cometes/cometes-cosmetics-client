import axios from "axios";

export async function useFetchBanner(category: string) {
  const request = await axios.get(
    `https://macproj.shop/product/fetchBanner?category=${category}`
  );
  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}
