import instance from "./axios";

export const getAccessToken = async () => {
  try {
    const result = await instance.post(
      "https://macproj.shop/login/restoreAccessToken"
    );
    const newAccessToken = result.data.data;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) alert(error.message);
  }
};
