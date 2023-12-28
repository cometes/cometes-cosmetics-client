import { debounce } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useHeader = () => {
  const router = useRouter();

  // scroll 이벤트 리스너
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  });

  const [isBgOn, setIsBgOn] = useState(false);
  const [isFullNavOn, setIsFullNavOn] = useState(false);
  const [fullNavActive, setFullNavActive] = useState("disable");
  const [searchActive, setSearchActive] = useState("disable");
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [ishover, setishover] = useState(false);
  const [menu, setMenu] = useState("");
  const [currentScroll, setCurrentScroll] = useState(0);
  const [headerActive, setHeaderActive] = useState(true);

  // 헤더 마우스 엔터 이벤트
  const onMouseEnterNav = (value: string) => () => {
    setMenu(value);
  };
  const onMouseLeaveNav = () => {
    setMenu("");
  };

  // full 네비게이션 버튼 클릭 이벤트
  const onClickFullNavBtn = async () => {
    setIsSearchOn(false);

    if (isFullNavOn) {
      setFullNavActive("disable");
      document.body.style.overflow = "";

      // 1초 후에 setIsFullNavOn(false)를 호출하도록 setTimeout 사용
      await new Promise(resolve => setTimeout(resolve, 500));

      setIsFullNavOn(false);
    } else {
      setFullNavActive("active");
      setIsFullNavOn(true);
      document.body.style.overflow = "hidden";
    }
  };

  // full 네비게이션 메뉴 클릭 이벤트
  const onClickFullMenu = (value: string) => () => {
    if (value === menu) {
      setMenu("");
    } else {
      setMenu(value);
    }
  };

  // sub 메뉴 클릭 이벤트
  const onClickSubMenu = (url: string) => () => {
    router.push(url);
    setIsFullNavOn(false);
    setishover(false);
    setIsSearchOn(false);
    document.body.style.overflow = "";
  };

  // 검색 버튼 클릭 이벤트
  const onClickSearch = async () => {
    setIsFullNavOn(false);
    if (isSearchOn) {
      setSearchActive("disable");
      document.body.style.overflow = "";
      document.body.style.width = "100%";

      await new Promise(resolve => setTimeout(resolve, 500));

      setIsSearchOn(false);
    } else {
      setSearchActive("active");
      setIsSearchOn(true);
      document.body.style.overflow = "hidden";
      document.body.style.width = "calc(100% - 15px)";
    }
  };

  // 스크롤 감시 이벤트
  const updateScroll = debounce(() => {
    const current = window.scrollY;
    setCurrentScroll(window.scrollY || document.documentElement.scrollTop);
    setHeaderActive(current <= window.innerHeight || currentScroll > current);
  }, 150);

  return {
    onMouseEnterNav,
    onMouseLeaveNav,
    onClickFullNavBtn,
    onClickFullMenu,
    onClickSubMenu,
    onClickSearch,
    isBgOn,
    isFullNavOn,
    isSearchOn,
    ishover,
    menu,
    currentScroll,
    fullNavActive,
    searchActive,
    headerActive,
    setIsBgOn,
    setIsFullNavOn,
    setIsSearchOn,
    setishover,
    setMenu,
    setHeaderActive
  };
};
