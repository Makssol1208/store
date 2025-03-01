import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/blocks/categories.module.css";

export default function Categories({ title, products = [], amount }) {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2 className={styles.categories__header} key={amount}>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, name, image }) => (
          <div className={styles.flex} key={id}>
            <Link
              to={`/categories/${id}`}
              key={id}
              className={styles.categories__product}
            >
              <img className={styles.cat__img} src={image} alt="Product" />
              <h3 className={styles.title}>{name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
