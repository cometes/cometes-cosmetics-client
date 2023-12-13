import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useHeader = () => {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const [isBgOn, setIsBgOn] = useState(false);
  const [isFullNavOn, setIsFullNavOn] = useState(false);
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

  const onClickFullNavBtn = () => {
    setIsFullNavOn(prev => !prev);
    setIsSearchOn(false);
    document.body.style.overflow = isFullNavOn ? "" : "hidden";
    // document.body.style.paddingRight = isFullNavOn ? "" : "15px";
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
  const onClickSearch = () => {
    setIsSearchOn(prev => !prev);
    setIsFullNavOn(false);
    document.body.style.overflow = isSearchOn ? "" : "hidden";
    // document.body.style.paddingRight = isSearchOn ? "" : "15px";
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
    setIsBgOn,
    setIsFullNavOn,
    setIsSearchOn,
    setishover,
    setMenu
  };
};
