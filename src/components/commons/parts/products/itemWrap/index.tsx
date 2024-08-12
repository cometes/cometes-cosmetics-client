import { Pagination, Select } from "antd";
import ProductsItemDefault from "../../item/products/default";
import WrapperWidth1200px from "../../wrapper/w1200";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import {
  useFetchProducts,
  useFetchProductsLogin
} from "../../../hooks/queries/fetchProducts";
import { useRouter } from "next/router";
import {
  useSearchProduct,
  useSearchProductLogin
} from "../../../hooks/queries/searchProduct";

export default function ProductsItemWrap(props) {
  const router = useRouter();
  const topRef = useRef(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(props.listData);
    getDataLogined();
  }, [props.listData]);

  const getDataLogined = async () => {
    if (props.isSearch) {
      try {
        const result = await useSearchProductLogin(props.keyword, 1);
        setList(result.data);
      } catch (error) {
        setList(props.listData);
      }
    } else {
      try {
        const result = await useFetchProductsLogin(
          props.sub ? props.sub : props.category,
          1
        );
        setList(result.data);
      } catch (error) {
        setList(props.listData);
      }
    }
  };

  const onClickPagination = async (page: number) => {
    if (props.isSearch) {
      const result = await useSearchProduct(props.keyword, page);
      setList(result.data);
    } else {
      const result = await useFetchProducts(
        props.sub ? props.sub : props.category,
        page
      );
      setList(result.data);
    }

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
          <S.CategoryTitle>{props.category || props.keyword}</S.CategoryTitle>
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
            suffixIcon={<S.CategoryIcon className="fi fi-rr-angle-small-down" />}
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
