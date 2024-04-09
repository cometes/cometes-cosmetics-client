import * as yup from "yup";

export const schemaSignup = yup.object({
  phone: yup.string().required(),
  provider: yup.string().required(),
  email: yup.string().required(),
  name: yup
    .string()
    .required("성함을 입력해주세요.")
    .min(2, "2 ~ 8자리 이내의 성함을 입력해주세요.")
    .max(8, "2 ~ 8자리 이내의 성함을 입력해주세요."),
  address: yup.string().required("주소를 입력해주세요."),
  addressCode: yup.string(),
  detailAddress: yup.string().required("상세주소를 입력해주세요.")
});

export const schemaToken = yup.object({
  phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    ),
  token: yup
    .string()
    .required("인증번호를 입력해주세요.")
    .min(4, "4자리 인증번호를 입력해주세요.")
});
export const schemaPhone = yup.object({
  phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    ),
  token: yup.string()
});
