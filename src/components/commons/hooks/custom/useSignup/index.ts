import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignup } from "../../../../../commons/libraries/schema";
import { useRecoilState } from "recoil";
import {
  userEmailState,
  userPhoneState,
  userProviderState
} from "../../../../../commons/stores";

export const useSignup = () => {
  const router = useRouter();

  // 주소 state
  const [address, setAddress] = useState("");
  const [addressCode, setAddressCode] = useState("");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schemaSignup),
    mode: "onSubmit"
  });
  const storage = globalThis?.sessionStorage;

  useEffect(() => {
    setValue("phone", storage.getItem("phone"));
    setValue("provider", storage.getItem("provider"));
    setValue("email", storage.getItem("email"));
    void trigger("phone");
    void trigger("provider");
    void trigger("email");
  }, []);

  // =============== 주소 검색 완료 ===============
  const onCompleteAddressSearch = (data: {
    zonecode: string;
    address: string;
  }) => {
    setValue("address", data.address);
    setValue("addressCode", data.zonecode);
    void trigger("address");
    void trigger("addressCode");
    setAddress(data.address);
    setAddressCode(data.zonecode);
    setIsAddressModalOpen(prev => !prev);
  };

  // =============== 추가정보 제출 버튼 클릭 ===============
  const onClickSubmitSignUp = async data => {
    console.log(data);

    try {
      const result = await axios.post("https://seungwon.shop/user/createUser", {
        email: data.email,
        provider: data.provider,
        phone: data.phone,
        name: data.name,
        addressCode: data.addressCode,
        address: data.address,
        detailAddress: data.detailAddress
      });
      console.log(result?.data);
      storage.setItem("id", result?.data?.data);
      storage.removeItem("phone");
      storage.removeItem("email");
      storage.removeItem("provider");
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    isAddressModalOpen,
    setIsAddressModalOpen,
    onCompleteAddressSearch,
    onClickSubmitSignUp,
    address,
    addressCode,
    register,
    handleSubmit,
    formState
  };
};
