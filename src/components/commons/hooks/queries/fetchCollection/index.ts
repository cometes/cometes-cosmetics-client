import axios from "axios";

export const useFetchCollection = async (collection: string) => {
  const result = await axios.get(`https://seungwon.shop/product/fetchCollection?collection=${collection}`);

  const response = await result.data;
  const data = response;

  return {
    data
  };
};
