import { useCookies } from "react-cookie";

export const useAccessToken = () => {
  const [appCookies, setAppCookies] = useCookies();
  const accessToken = appCookies["accessToken"];

  return {
    accessToken
  };
};
