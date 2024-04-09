import axios from "axios";

declare const window: typeof globalThis & {
  IMP: any;
};

interface IResponseProps {
  success: boolean;
  imp_uid: string;
  paid_amount: number;
}

const storage = globalThis?.localStorage;

export const usePoint = () => {
  const onClickCharge = async (amount: number, payment: string) => {
    const IMP = window.IMP;
    IMP.init("imp38366854");

    try {
      const rsp: IResponseProps = await new Promise(resolve => {
        IMP.request_pay(
          {
            // param
            pg: payment,
            pay_method: "card",
            name: "포인트 충전",
            amount,
            buyer_email: "",
            buyer_name: "",
            buyer_tel: "",
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
        console.log(rsp);
        const result = await axios.post(
          "https://seungwon.shop/payment/createPayment",
          {
            impUid: rsp.imp_uid,
            amount,
            type: "kakao"
          },
          {
            headers: {
              Authorization: `Bearer ${storage?.getItem("accessToken")}`
            }
          }
        );
        alert("포인트 충전이 완료되었습니다.");
      } else {
        // 결제 실패
        alert("충전에 실패하였습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickCharge
  };
};
