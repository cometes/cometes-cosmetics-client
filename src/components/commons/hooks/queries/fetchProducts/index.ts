import axios from "axios";

export async function useFetchProducts(category: string, page: number) {
  const request = await axios.get(
    `https://macproj.shop/product/fetchProducts?category=${category}&page=${page}`
  );
  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}

export async function useFetchProductsLogin(category: string, page: number) {
  const storage = globalThis?.localStorage;

  const request = await axios
    .get("https://macproj.shop/user/getUserId", {
      headers: {
        Authorization: `Bearer ${storage?.getItem("accessToken")}`
      }
    })
    .then(async res => {
      const result = await axios.get(
        `https://macproj.shop/product/fetchProducts?id=${res?.data?.data}&category=${category}&page=${page}`
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
