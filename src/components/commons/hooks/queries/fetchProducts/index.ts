import axios from "axios";
import { useState } from "react";

// export default function useFetchProducts() {
//   const [productsData, setProductsData] = useState([]);
//   const [productsCount, setProductsCount] = useState(0);

//   const fetchProducts = async (category: string, page: number) => {
//     try {
//       const result = await axios
//         .get(
//           `https://seungwon.shop/product/fetchProducts?category=${category}&page=${page}`
//         )
//         .then(res => {
//           setProductsData(res.data?.data);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchProductsCount = async (category: string) => {
//     try {
//       const result = await axios
//         .get(
//           `https://seungwon.shop/product/fetchProducts?category=${category}&count=true`
//         )
//         .then(res => {
//           setProductsCount(res.data?.data);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return {
//     fetchProducts,
//     fetchProductsCount,
//     productsData,
//     productsCount
//   };
// }

export async function useFetchProducts(category: string, page: number) {
  const request = await axios.get(
    `https://seungwon.shop/product/fetchProducts?category=${category}&page=${page}`
  );
  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}

export async function useFetchProductsCount(category: string) {
  const request = await axios.get(
    `https://seungwon.shop/product/fetchProducts?category=${category}&count=true`
  );
  const response = await request.data;
  const data = response.data;

  return {
    data
  };
}
