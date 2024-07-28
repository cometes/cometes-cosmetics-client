import axios from "axios";

export async function useSearchProduct(search: string, page: number) {
  const request = await axios.get(
    `https://macproj.shop/product/searchProduct?search=${search}&page=${page}`
  );

  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}

export async function useSearchProductLogin(search: string, page: number) {
  const storage = globalThis?.localStorage;

  const request = await axios
    .get("https://macproj.shop/user/getUserId", {
      headers: {
        Authorization: `Bearer ${storage?.getItem("accessToken")}`
      }
    })
    .then(async res => {
      const result = await axios.get(
        `https://macproj.shop/product/searchProduct?id=${res?.data?.data}&search=${search}&page=${page}`
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
