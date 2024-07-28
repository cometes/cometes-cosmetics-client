import axios from "axios";

export async function useFetchDetailProduct(id: string | string[]) {
  const request = await axios.get(
    `https://macproj.shop/product/fetchDetailProduct?id=${id}`
  );
  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}
