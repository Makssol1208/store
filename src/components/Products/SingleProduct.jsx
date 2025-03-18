import React, { useEffect } from "react";

import { ROUTES } from "../../utils/routes";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductQuery } from "../../store/api/apiSlice";
import { getRelatedProducts } from "../../store/products/productsSlice";

import Product from "./Product";
import Products from "./Products";

export default function SingleProduct() {

  const dispatch = useDispatch();
  const { list } = useSelector(({ products }) => products);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess, navigate]);

  useEffect(() => {
    if (!data || !list.lenght) return;
    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch, list.lenght]);

  return (
    <>
      <Product {...data} />
      <Products products={list} amount={5} title="Related Products" />
    </>
  );
}
