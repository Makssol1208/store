import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";

import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../store/products/productsSlice";

import styles from "../../styles/base.module.css";

export default function Home() {
  const dispatch = useDispatch();

  const { list } = useSelector(({ products }) => products);
  const { filtered } = useSelector(({ products }) => products);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <Poster />
      </div>
      <Products products={list} amount={10} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 100$" />
    </>
  );
}
