import React from "react";
import styles from "../../styles/blocks/header.module.css";

import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import Logo from "../../img/header/LOGO.png";
import Avatar from "../../img/header/user.svg";
import Favourite from "../../img/header/favor.svg";
import Cart from "../../img/header/cart.svg";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <nav className="nav">
          <div className={styles.nav__row}>
            <Link className={styles.logo} to={ROUTES.HOME}>
              <img src={Logo} alt="stuff" />
            </Link>
            <div className={styles.user__nav}>
              <img
                alt="avatar"
                className={styles.user__avatar}
                src={Avatar}
                // style={{ backgroundImage: `url(${Avatar})` }}
              />
              <span className={styles.user__name}>Hello, Maks Soloviov</span>
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
