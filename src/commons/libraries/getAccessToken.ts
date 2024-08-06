import axios from "axios";

export const getAccessToken = async () => {
  try {
    const result = await axios.post(
      "https://macproj.shop/login/restoreAccessToken"
    );
    const newAccessToken = result.data.data;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) alert(error.message);
  }
};
