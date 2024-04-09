import { Pagination, Select } from "antd";
import ProductsItemDefault from "../../item/products/default";
import WrapperWidth1200px from "../../wrapper/w1200";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useFetchProducts } from "../../../hooks/queries/fetchProducts";
import { useRouter } from "next/router";

export default function ProductsItemWrap(props) {
  const router = useRouter();
  const topRef = useRef(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(props.listData);
  }, [props.listData]);

  const getDataLogined = async () => {
    const result = await useFetchProducts(
      props.sub ? props.sub : props.category,
      1
    );
  };

  const onClickPagination = async (page: number) => {
    const result = await useFetchProducts(
      props.sub ? props.sub : props.category,
      page
    );
    setList(result.data);
    const newState = { page: page };
    history.pushState(newState, null, `?page=${page}`);
    topRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <WrapperWidth1200px>
        <S.CategoryWrap>
          <S.CategoryTitle>Products</S.CategoryTitle>
          <S.CategoryIcon className="fi fi-rr-angle-small-right" />
          <S.CategoryTitle>{props.category}</S.CategoryTitle>
          {props.sub && (
            <>
              <S.CategoryIcon className="fi fi-rr-angle-small-right" />
              <S.CategoryTitle>{props.sub}</S.CategoryTitle>
            </>
          )}
        </S.CategoryWrap>
        <S.ItemTopBox ref={topRef}>
          <p>총 {props.count} 개</p>
          <Select
            defaultValue="인기순"
            style={{ width: 100 }}
            bordered={false}
            suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
            options={[
              { value: "최신순", label: "최신순" },
              { value: "인기순", label: "인기순" }
            ]}
          />
        </S.ItemTopBox>
      </WrapperWidth1200px>
      <S.ItemContainer>
        <S.GridWrap>
          {list?.map(el => (
            <ProductsItemDefault data={el} />
          ))}
        </S.GridWrap>
      </S.ItemContainer>
      <S.PaginationBox>
        <Pagination
          total={props.count}
          defaultPageSize={12}
          onChange={onClickPagination}
          defaultCurrent={Number(router.query.page)}
        />
      </S.PaginationBox>
    </>
  );
}
