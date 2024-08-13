import axios from "axios";
import { useAccessToken } from "../../custom/useAccessToken";

export async function useFetchProducts(category: string, page: number) {
  const request = await axios.get(
    `https://macproj.shop/product/fetchProducts?category=${category}&page=${page}`,
    {
      // withCredentials: true
    }
  );
  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}

export async function useFetchProductsLogin(category: string, page: number) {
  const { accessToken } = useAccessToken();

  const request = await axios
    .get("https://macproj.shop/user/getUserId", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      // withCredentials: true
    })
    .then(async res => {
      const result = await axios.get(
        `https://macproj.shop/product/fetchProducts?id=${res?.data?.data}&category=${category}&page=${page}`,
        // { withCredentials: true }
      );
      return result;
    });

  const data = request?.data?.data;

  return {
    data
  };
}

export async function useFetchProductsCount(category: string) {
  const request = await axios.get(
    `https://macproj.shop/product/fetchProducts?category=${category}&count=true`
  );
  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}
