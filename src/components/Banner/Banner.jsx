import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import styles from '../../styles/blocks/banner.module.css';
import ImgBanner from '../../img/banner/Banner.jpg';

export default function Banner() {
  const { currentUser } = useSelector(({ user }) => user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  return (
    <div>
      <section className={styles.banner}>
        <div className={styles.left}>
          <p className={styles.content}>
            NEW YEAR <br />
            <span>SALE</span>
          </p>
          <button className={styles.more} onClick={handleClick}>See more</button>
        </div>

        <div className={styles.right}>
          <img src={ImgBanner} alt="Banner" className={styles.img__banner} />
          <p className={styles.discount}>
            save up to <span>50%</span> off
          </p>
        </div>
      </section>
    </div>
  );
}
