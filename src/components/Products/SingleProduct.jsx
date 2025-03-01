import React, { useEffect } from "react";

import { ROUTES } from "../../utils/routes";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";

import { getRelatedProducts } from "../../store/products/productsSlice";

import Product from "./Product";
import Products from "./Products";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const { list, related } = useSelector(({ products }) => products);
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
  }, [data, dispatch,list.lenght]);

  return (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related Products" />
    </>
  );
}
