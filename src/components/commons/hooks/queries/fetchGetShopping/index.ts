import axios from "axios";

export async function useFetchGetShopping(accessToken) {
  const request = await axios.get(`https://macproj.shop/shopping/getShopping`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    // withCredentials: true
  });
  const response = await request.data;
  const data = response;

  return {
    data
  };
}
