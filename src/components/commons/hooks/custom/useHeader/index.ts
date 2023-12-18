import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useHeader = () => {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const [isBgOn, setIsBgOn] = useState(false);
  const [isFullNavOn, setIsFullNavOn] = useState(false);
  const [fullNavActive, setFullNavActive] = useState("disable");
  const [searchActive, setSearchActive] = useState("disable");
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [ishover, setishover] = useState(false);
  const [menu, setMenu] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const onMouseEnterNav = (value: string) => () => {
    setMenu(value);
  };
  const onMouseLeaveNav = () => {
    setMenu("");
  };

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
  const onClickFullMenu = (value: string) => () => {
    if (value === menu) {
      setMenu("");
    } else {
      setMenu(value);
    }
  };
  const onClickSubMenu = (url: string) => () => {
    router.push(url);
    setIsFullNavOn(false);
    setishover(false);
    setIsSearchOn(false);
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };
  const onClickSearch = async () => {
    setIsFullNavOn(false);
    if (isSearchOn) {
      setSearchActive("disable");
      document.body.style.overflow = "";

      await new Promise(resolve => setTimeout(resolve, 500));

      setIsSearchOn(false);
    } else {
      setSearchActive("active");
      setIsSearchOn(true);
      document.body.style.overflow = "hidden";
    }
  };
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

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
    scrollPosition,
    fullNavActive,
    searchActive,
    setIsBgOn,
    setIsFullNavOn,
    setIsSearchOn,
    setishover,
    setMenu
  };
};
