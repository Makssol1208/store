import { AppRoutes } from "../Routes/Routes";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UserForm from "../User/UserForm";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../store/categories/categoriesSlice";
import { getProducts } from "../../store/products/productsSlice";

import styles from "../../styles/base.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <UserForm />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
