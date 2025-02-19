import styles from "../../styles/blocks/hero.module.css";

import HERO from "../../img/hero/hero.png";

export default function Poster() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper} data-text="BIG SALE 20%">
        <div className={styles.hero__content}>
          <p className={styles.hero__content_title}>the bestseller of 2022</p>
          <h1 className={styles.hero__content__desc}>
            LENNON r2d2<br /> with NVIDIA 5090 TI
          </h1>
          <div className={styles.button}>
            <a href="#!" className="btn">
              Shop Now
            </a>
          </div>
        </div>

        <div className={styles.hero__img}>
          <img src={HERO} alt="Main" />
        </div>
      </div>
    </div>
  );
}
