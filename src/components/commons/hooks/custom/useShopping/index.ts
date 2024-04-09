import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { useFetchGetShopping } from "../../queries/fetchGetShopping";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export const useShopping = (
  listData: SetStateAction<{ data: { list: any[] } }>
) => {
  const router = useRouter();
  const storage = globalThis?.localStorage;
  const sessionStorage = globalThis?.sessionStorage;
  const [appCookies, setAppCookies] = useCookies();

  const [data, setData] = useState({ data: { list: [] } });
  const [optionData, setOptionData] = useState([]);
  const [defaultOption, setDefaultOption] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [selectedCount, setSelectedCount] = useState(0);

  // 1~10 배열 만들기
  const numArr = Array.from({ length: 10 }, (_, index) => index + 1);
  const countArr = numArr.map(el => {
    return { value: el, label: el };
  });

  // 체크박스
  const [checkedList, setCheckedList] = useState([]);
  const idArr = data?.data?.list.map(el => {
    return el.id;
  });
  const shoppingArr = data?.data?.list.map(el => {
    return {
      shoppingId: el.id,
      count: el.count,
      option: el.option
    };
  });

  // 장바구니 리스트 요청
  const getListData = async () => {
    try {
      const result = await useFetchGetShopping(appCookies["accessToken"]);
      setData(result.data);
    } catch (error) {
      setData({ data: { list: [] } });
    }
  };

  useEffect(() => {
    setData(listData);
  }, []);

  // 첫 접속 시 전부 선택됨
  useEffect(() => {
    setCheckedList(idArr);
    setSum(totalSum);
    setShoppingList(shoppingArr);
  }, [data?.data?.list]);

  // 전부 선택
  const checkAll = idArr?.length === checkedList?.length;
  const indeterminate =
    checkedList?.length > 0 && checkedList?.length < idArr?.length;

  const [shoppingList, setShoppingList] = useState([
    {
      shoppingId: "",
      count: 0,
      option: ""
    }
  ]);

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? idArr : []);
    setSum(e.target.checked ? totalSum : 0);
  };

  // 주문 금액 계산
  const [sum, setSum] = useState(0);
  const totalSum = data?.data?.list
    .map(el => {
      return el.product.price * el.count;
    })
    .reduce((total, currentValue) => total + currentValue, 0);

  // 선택 하면 금액, id, list 추가
  const onChangeCheckList =
    (id: string, price: number, option: string) => e => {
      if (e.target.checked) {
        setCheckedList(prev => [id, ...prev]);
        setSum(prev => prev + price);
        setShoppingList(prev => [
          ...prev,
          { shoppingId: id, count: price, option: option }
        ]);
      } else {
        setCheckedList(prev => prev.filter(item => item !== id));
        setSum(prev => prev - price);
        setShoppingList(prev => prev.filter(item => item.shoppingId !== id));
      }
    };

  // 장바구니 추가
  const onClickAdd = async (productId: string, option: string) => {
    try {
      const result = await axios.post(
        "https://seungwon.shop/shopping/add",
        {
          productId,
          option
        },
        {
          headers: {
            Authorization: `Bearer ${storage?.getItem("accessToken")}`
          }
        }
      );

      if (result.data) {
        if (
          confirm("상품이 장바구니에 담겼습니다. 장바구니를 확인하시겠습니까?")
        ) {
          router.push("/mypage/cart/");
        }
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 구매 수량 변경
  const handleChangeCount = (id: string) => (value: number) => {
    setSelectedCount(value);
    onClickChangeCount(id, value);
  };

  // 옵션변경 클릭
  const onClickOption = async (
    productId: string,
    defaultOption: string,
    shoppingId: string
  ) => {
    setDefaultOption(defaultOption);
    setCurrentId(shoppingId);
    try {
      const result = await axios.get(
        `https://seungwon.shop/shopping/fetchOption?productId=${productId}`,
        {
          headers: {
            Authorization: `Bearer ${storage?.getItem("accessToken")}`
          }
        }
      );

      setOptionData(result.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 옵션변경 완료
  const onClickOptionChange = async (value: string) => {
    try {
      const result = await axios.patch(
        "https://seungwon.shop/shopping/updateShopping",

        [
          {
            shoppingId: currentId,
            option: value
          }
        ],

        {
          headers: {
            Authorization: `Bearer ${storage?.getItem("accessToken")}`
          }
        }
      );
      alert("옵션이 정상적으로 변경되었습니다.");
      getListData();
    } catch (error) {
      alert("옵션 변경에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  // 수량 변경하기
  const onClickChangeCount = async (id: string, count: number) => {
    try {
      const result = await axios.patch(
        "https://seungwon.shop/shopping/updateShopping",
        [
          {
            shoppingId: id,
            count
          }
        ],
        {
          headers: {
            Authorization: `Bearer ${storage?.getItem("accessToken")}`
          }
        }
      );
      alert("수량이 정상적으로 변경되었습니다.");
      getListData();
    } catch (error) {
      alert("수량 변경에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  // 장바구니 삭제하기
  const onClickDelete = (id: any[]) => async e => {
    if (confirm("선택한 상품을 삭제하시겠습니까?")) {
      try {
        const result = await axios.delete(
          `https://seungwon.shop/shopping/delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${storage?.getItem("accessToken")}`
            }
          }
        );
        alert("선택한 상품이 장바구니에서 삭제되었습니다.");
        getListData();
      } catch (error) {
        alert("상품 삭제에 실패하였습니다. 다시 시도해주세요.");
      }
    }
  };

  // 주문 요청
  const onClickOrder = (shoppingList: any[]) => async () => {
    try {
      const result = await axios.patch(
        "https://seungwon.shop/shopping/updateShopping",
        shoppingList,
        {
          headers: {
            Authorization: `Bearer ${storage?.getItem("accessToken")}`
          }
        }
      );

      const shoppingData = {
        name: result.data.data.name,
        phone: result.data.data.phone,
        address: result.data.data.address,
        detailAddress: result.data.data.detailAddress,
        addressCode: result.data.data.addressCode,
        point: result.data.data.point,
        list: result.data.data.list,
        priceSum: result.data.data.priceSum,
        sum: result.data.data.sum
      };
      sessionStorage.setItem("shoppingData", JSON.stringify(shoppingData));
      router.push("/order/");
    } catch (error) {
      alert("주문 요청에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return {
    onClickAdd,
    onClickOption,
    onClickOptionChange,
    onClickChangeCount,
    onClickDelete,
    onClickOrder,
    handleChangeCount,
    onCheckAllChange,
    onChangeCheckList,
    data,
    optionData,
    defaultOption,
    currentId,
    countArr,
    checkAll,
    indeterminate,
    checkedList,
    sum,
    shoppingList
  };
};
