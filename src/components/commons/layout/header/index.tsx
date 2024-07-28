import { useModal } from "../../hooks/custom/useModal";
import { useHeader } from "../../hooks/custom/useHeader";
import LoginModal from "../../parts/header/login";
import SearchBox from "../../parts/header/search";
import HeaderMain from "../../parts/header/main";
import FullNav from "../../parts/header/fullNav";

export default function Header(props) {
  const { isModalOpen, handleOk, handleCancel, showModal } = useModal();
  const {
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
    setMenu
  } = useHeader();

  return (
    <>
      <LoginModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <HeaderMain
        showModal={showModal}
        isFullNavOn={isFullNavOn}
        isSearchOn={isSearchOn}
        ishover={ishover}
        isBgOn={isBgOn}
        isWhite={props.isWhite}
        menu={menu}
        currentScroll={currentScroll}
        headerActive={headerActive}
        setIsBgOn={setIsBgOn}
        setishover={setishover}
        setMenu={setMenu}
        onMouseEnterNav={onMouseEnterNav}
        onMouseLeaveNav={onMouseLeaveNav}
        onClickFullNavBtn={onClickFullNavBtn}
        onClickSubMenu={onClickSubMenu}
        onClickSearch={onClickSearch}
      />
      <FullNav
        isFullNavOn={isFullNavOn}
        setIsFullNavOn={setIsFullNavOn}
        onClickFullMenu={onClickFullMenu}
        onClickSubMenu={onClickSubMenu}
        menu={menu}
        fullNavActive={fullNavActive}
      />
      <SearchBox isSearchOn={isSearchOn} searchActive={searchActive} setIsSearchOn={setIsSearchOn} onClickSearch={onClickSearch}/>
    </>
  );
}
