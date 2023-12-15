import { useState } from "react";

export const useDetail = data => {
  const [isInfoOn, setIsInfoOn] = useState(false);
  const [colorCategory, setColorCategory] = useState("");
  const [colorIcon, setColorIcon] = useState({
    code: "",
    name: "",
    desc: "",
    product: "",
    texture: ""
  });
  const [filtered, setFiltered] = useState(data.color);

  const onClickInfo = () => {
    setIsInfoOn(prev => !prev);
  };

  const colorCategories = [];

  data.color.forEach(el => {
    colorCategories.push(el.category);
  });

  const categories = colorCategories.filter((el, idx) => {
    return colorCategories.indexOf(el) === idx;
  });

  const onClickColorCategory = (value: string) => () => {
    setColorCategory(value);
    setColorIcon({
      code: "",
      name: "",
      desc: "",
      product: "",
      texture: ""
    });
    const filterArr = data.color.filter(el => {
      if (value === "") {
        return data.color;
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
      product: string;
      texture: string;
    }) =>
    () => {
      setColorIcon({
        code: value.code,
        name: value.name,
        desc: value.desc,
        product: value.product,
        texture: value.texture
      });
    };

  const onClickClear = () => {
    setColorIcon({
      code: "",
      name: "",
      desc: "",
      product: "",
      texture: ""
    });
  };

  return {
    isInfoOn,
    onClickInfo,
    categories,
    onClickColorCategory,
    onClickColorIcon,
    onClickClear,
    colorCategory,
    filtered,
    colorIcon
  };
};
