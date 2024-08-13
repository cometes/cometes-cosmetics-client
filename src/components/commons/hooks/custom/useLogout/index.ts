import axios from "axios";
import { useRouter } from "next/router";
import { useAccessToken } from "../useAccessToken";

export const useLogout = () => {
  const router = useRouter();
  const { accessToken } = useAccessToken();

  const onClickLogout = async () => {
    try {
      const result = await axios.post(
        "https://macproj.shop/login/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          // withCredentials: true
        }
      );

      if (result?.data) {
        alert("정상적으로 로그아웃 되었습니다.");
        router.reload();
      }
    } catch (error) {
      alert("로그아웃에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return {
    onClickLogout
  };
};
