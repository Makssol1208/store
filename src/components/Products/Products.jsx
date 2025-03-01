import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/blocks/products.module.css";

export default function Products({ title, products = [],amount }) {
  const list = products.filter((_, i) => i < amount);
  
  return (
    <div>
      <section className={styles.tredingBlock}>
        <div className={styles.products__wprapper}>

          <h2 className={styles.products__header}>{title}</h2>
          <div className={styles.product__wrapper}>

            {list.map(
              ({ id, images, title, category: { name: cat }, price }) => (
                <Link
                  to={`/products/${id}`}
                  key={id}
                  className={styles.product}
                >
                  <img
                    className={styles.product__img}
                    src={images}
                    alt="Product"
                  />
                  <div className={styles.product__desc}>
                    <h4 className={styles.product__title}>{title}</h4>
                    <span className={styles.product__type}>{cat}</span>
                    <div className={styles.product__price}>
                      <span className={styles.product__priceNew}>{price}$</span>
                      <span className={styles.product__priceOld}>
                        {Math.floor(price * 0.8)}$
                      </span>

                      <span className={styles.product__priceAmount}>
                        {Math.floor(Math.random() * 20 + 1)} people purchased
                      </span>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
