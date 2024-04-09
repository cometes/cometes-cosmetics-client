import axios from "axios";

export async function useFetchGetShopping(accessToken) {
  const request = await axios.get(
    `https://seungwon.shop/shopping/getShopping`,
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
