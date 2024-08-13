import axios from "axios";
import { useAccessToken } from "../../custom/useAccessToken";

export async function useSearchProduct(search: string, page: number) {
  const request = await axios.get(
    `https://macproj.shop/product/searchProduct?search=${search}&page=${page}`
    // { withCredentials: true }
  );

  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}

export async function useSearchProductLogin(search: string, page: number) {
  const { accessToken } = useAccessToken();

  const request = await axios
    .get("https://macproj.shop/user/getUserId", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
      // withCredentials: true
    })
    .then(async res => {
      const result = await axios.get(
        `https://macproj.shop/product/searchProduct?id=${res?.data?.data}&search=${search}&page=${page}`
        // { withCredentials: true }
      );
      return result;
    });

  const data = request?.data?.data;

  return {
    data
  };
}

export async function useSearchProductCount(search: string) {
  const request = await axios.get(
    `https://macproj.shop/product/searchProduct?search=${search}&count=true`
  );

  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}
