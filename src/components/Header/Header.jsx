import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../utils/routes";
import { toggleForm } from "../../store/user/userSlice";

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

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
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
                  placeholder="Search for anything..."
                  defaultValue=""
                  onChange={() => {}}
                />
              </div>
              {false && <div className="holder"></div>}
            </form>

            <div className={styles.box}>
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
