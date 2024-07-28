import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  schemaPhone,
  schemaToken
} from "../../../../../commons/libraries/schema";
import { useRecoilState } from "recoil";
import { userPhoneState } from "../../../../../commons/stores";

export const usePhoneCheck = () => {
  const router = useRouter();
  const [time, setTime] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isTokenInputActive, setIsTokenInputActive] = useState(false);
  const [isValidated, setIsvalidated] = useState(false);
  const [isTokenButtonActive, setIsTokenButtonActive] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(isTokenInputActive ? schemaToken : schemaPhone),
    mode: "onSubmit"
  });

  // =============== 타이머 ===============
  useEffect(() => {
    setIsTimerActive(true);
    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    if (time === 0) {
      setIsTimerActive(false);
      setIsTokenButtonActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  let min = Math.floor(time / 60);
  let sec = String(time % 60).padStart(2, "0");

  // =============== 인증번호 발송 ===============
  const onClickSendToken = async data => {
    setIsTokenInputActive(true);
    setIsTokenButtonActive(true);
    setTime(180);
    try {
      const result = await axios.post("https://macproj.shop/user/sendSMS", {
        phone: data.phone
      });
    } catch (error) {
      setIsTokenButtonActive(false);
      setTime(0);
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 인증 버튼 클릭 ===============
  const onClickTokenButton = async data => {
    try {
      const result = await axios.post("https://macproj.shop/user/validateSMS", {
        token: Number(data.token),
        phone: data.phone
      });
      if (result?.data?.data) {
        // sessionStorage에 저장
        const storage = globalThis?.sessionStorage;
        storage.setItem("phone", data.phone);
        router.push(`/signup/create`);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    isTokenInputActive,
    isTokenButtonActive,
    isValidated,
    min,
    sec,
    register,
    handleSubmit,
    formState,
    onClickSendToken,
    onClickTokenButton
  };
};
