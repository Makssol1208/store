import React from "react";

import styles from '../../styles/blocks/banner.module.css';
import ImgBanner from '../../img/banner/Banner.jpg';

export default function Banner() {
  return (
    <div>
      <section className={styles.banner}>
        <div className={styles.left}>
          <p className={styles.content}>
            NEW YEAR <br />
            <span>SALE</span>
          </p>
          <button className={styles.more}>See more</button>
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
