import axios from "axios";
import { useRouter } from "next/router";
import { useAccessToken } from "../useAccessToken";

declare const window: typeof globalThis & {
  IMP: any;
};

interface IResponseProps {
  success: boolean;
  imp_uid: string;
  paid_amount: number;
}

export const usePoint = () => {
  const router = useRouter();
  const { accessToken } = useAccessToken();

  const onClickCharge = async data => {
    const IMP = window.IMP;
    IMP.init(process.env.NEXT_PUBLIC_IMP_UID);

    try {
      const rsp: IResponseProps = await new Promise(resolve => {
        IMP.request_pay(
          {
            // param
            pg: data.payment,
            pay_method: "card",
            name: "포인트 충전",
            amount: data.amount,
            buyer_email: data.email,
            buyer_name: data.name,
            buyer_tel: data.phone,
            buyer_addr: "Sinsa-dong, Gangnam-gu, Seoul",
            buyer_postcode: "01181",
            m_redirect_url: "/mypage/point/"
          },
          (rsp: IResponseProps) => {
            resolve(rsp);
          }
        );
      });

      if (rsp.success) {
        // 결제 성공
        const result = await axios.post(
          "https://macproj.shop/payment/createPayment",
          {
            impUid: rsp.imp_uid,
            amount: data.amount,
            type: "kakao"
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            },
            // withCredentials: true
          }
        );
        alert("포인트 충전이 완료되었습니다.");
        router.push("/mypage/point/");
      } else {
        // 결제 실패
        alert("충전에 실패하였습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("충전에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return {
    onClickCharge
  };
};
