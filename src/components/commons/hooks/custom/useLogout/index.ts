import instance from "../../../../../commons/libraries/axios";
import { useRouter } from "next/router";

export const useLogout = () => {
  const router = useRouter();
  const storage = globalThis?.localStorage;

  const onClickLogout = async () => {
    try {
      const result = await instance.post(
        "https://macproj.shop/login/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${storage?.getItem("accessToken")}`
          }
        }
      );

      if (result?.data) {
        storage.removeItem("accessToken");
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
