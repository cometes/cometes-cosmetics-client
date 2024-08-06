import instance from "../../../../../commons/libraries/axios";

export const useFetchCollection = async (collection: string) => {
  const result = await instance.get(
    `https://macproj.shop/product/fetchCollection?collection=${collection}`
  );

  const response = await result.data;
  const data = response;

  return {
    data
  };
};
