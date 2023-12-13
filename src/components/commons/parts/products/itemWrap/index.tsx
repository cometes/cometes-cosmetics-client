import { Select } from "antd";
import { lipArr } from "../../../../../commons/libraries/array";
import ProductsItemDefault from "../../item/products/default";
import WrapperWidth1200px from "../../wrapper/w1200";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ProductsItemWrap() {
  return (
    <WrapperWidth1200px>
      <S.ItemTopBox>
        <p>총 8 개</p>
        <Select
          defaultValue="추천순"
          style={{ width: 100 }}
          bordered={false}
          suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
          options={[
            { value: "추천순", label: "추천순" },
            { value: "최신순", label: "최신순" },
            { value: "인기순", label: "인기순" }
          ]}
        />
      </S.ItemTopBox>
      <S.GridWrap>
        {new Array(8).fill(1).map(el => (
          <ProductsItemDefault data={lipArr} />
        ))}
      </S.GridWrap>
    </WrapperWidth1200px>
  );
}
