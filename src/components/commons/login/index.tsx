import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable
} from "../../../commons/stores";
import { useEffect } from "react";

export default function LoginSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const recoilValueLoadable = useRecoilValueLoadable(
    restoreAccessTokenLoadable
  );

  useEffect(() => {
    void recoilValueLoadable.toPromise().then(newAccessToken => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  return <>{props.children}</>;
}
