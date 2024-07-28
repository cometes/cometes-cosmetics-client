import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useDetail = data => {
  /** 콘텐트, 인포, 리뷰 ref **/
  const infoRef = useRef(null);
  const reviewRef = useRef(null);

  const onClickRef = (ref: MutableRefObject<any>) => () => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const [isInfoOn, setIsInfoOn] = useState(false);
  const [isReviewDetailOn, setIsReviewDetailOn] = useState(false);
  const [colorCategory, setColorCategory] = useState("");
  const [colorIcon, setColorIcon] = useState({
    code: "",
    name: "",
    desc: "",
    image: "",
    texture: ""
  });

  const [filtered, setFiltered] = useState([]);

  const [currentOption, setCurrentOption] = useState("");

  useEffect(() => {
    setFiltered(data?.color);
  }, [data?.color]);

  const onClickInfo = () => {
    setIsInfoOn(prev => !prev);
  };
  const onClickReviewDetail = () => {
    setIsReviewDetailOn(prev => !prev);
  };

  const colorCategories = [];

  data?.color.forEach(el => {
    colorCategories.push(el.category);
  });

  const categories = colorCategories.filter((el, idx) => {
    return colorCategories.indexOf(el) === idx;
  });

  const onClickColorCategory = (value: string) => () => {
    setColorCategory(value);
    const filterArr = data?.color.filter(el => {
      if (value === "") {
        return data?.color;
      }
      return el.category === value;
    });
    setFiltered(filterArr);
  };

  const onClickColorIcon =
    (value: {
      code: string;
      name: string;
      desc: string;
      image: string;
      texture: string;
    }) =>
    () => {
      setColorIcon({
        code: value.code,
        name: value.name,
        desc: value.desc,
        image: value.image,
        texture: value.texture
      });
      setCurrentOption(value.name);
    };

  const onClickClear = () => {
    setColorIcon({
      code: "",
      name: "",
      desc: "",
      image: "",
      texture: ""
    });
  };

  return {
    isInfoOn,
    isReviewDetailOn,
    onClickInfo,
    categories,
    currentOption,
    onClickColorCategory,
    onClickColorIcon,
    onClickClear,
    onClickRef,
    onClickReviewDetail,
    colorCategory,
    filtered,
    colorIcon,
    infoRef,
    reviewRef
  };
};
