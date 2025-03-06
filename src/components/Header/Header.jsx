import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../utils/routes";
import { toggleForm } from "../../store/user/userSlice";
import { useGetProductsQuery } from "../../store/api/apiSlice";

import styles from "../../styles/blocks/header.module.css";

import Logo from "../../img/header/LOGO.png";
import Avatar from "../../img/header/user.svg";
import Favourite from "../../img/header/favor.svg";
import Cart from "../../img/header/cart.svg";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: "Guest", avatar: Avatar });
  const [searchValue, setSearchValue] = useState();

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div>
      <header className={styles.header}>
        <nav className="nav">
          <div className={styles.nav__row}>
            <Link className={styles.logo} to={ROUTES.HOME}>
              <img src={Logo} alt="stuff" />
            </Link>
            <div className={styles.user__nav}>
              <div
                className={styles.user__avatar}
                onClick={handleClick}
                style={{ backgroundImage: `url(${values.avatar})` }}
              />
              <span className={styles.user__name}>Hello, {values.name}</span>
            </div>

            <form>
              <div>
                <input
                  className={styles.form}
                  type="search"
                  name="search"
                  autoComplete="off"
                  value={searchValue}
                  placeholder="Search for anything..."
                  defaultValue=""
                  onChange={handleSearch}
                />
              </div>

              {searchValue && (
                <div className={styles.box}>
                  {isLoading
                    ? "Loading"
                    : !data.length
                    ? "No results"
                    : data.map(({ title, images, id }) => {
                        return (
                          <Link
                            to={`/products/${id}`}
                            className={styles.item}
                            key={id}
                            onClick={() => setSearchValue("")} //window close after choice
                          >
                            <div
                              className={styles.image}
                              style={{ backgroundImage: `url(${images[0]})` }}
                            />
                            <div className={styles.title}>{title}</div>
                          </Link>
                        );
                      })}
                </div>
              )}
            </form>

            <div className={styles.boxFav}>
              <a href="#!" className={styles.favorite}>
                <img src={Favourite} alt="Favourite" />
              </a>
              <Link to={ROUTES.CART} className={styles.cart}>
                <img src={Cart} alt="Cart" />
                <span className={styles.cart__number}>2</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
