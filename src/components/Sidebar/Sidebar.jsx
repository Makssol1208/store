import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "../../styles/blocks/sidebar.module.css";

export default function Sidebar() {
  const { list } = useSelector(({ categories }) => categories);  

  return (
    <div>
      <section className={styles.sidebar}>
        <div className={styles.sidebar__nav}>
          <h3 className={styles.sidebar__title}>CATEGORIES</h3>
          <nav>
            <ul className={styles.sidebar__menu}>
              {list.map(({ id, name }) => (
                <li key={id}>
                  <NavLink
                    to={`/categories/${id}`}
                    className={({ isActive }) =>
                      `${styles.sidebar__link} ${isActive ? styles.active : ""}`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.sidebar__footer}>
          <a href="#!" target="_blank" rel="noreferrer">
            Help
          </a>
          <a href="#!" target="_blank" rel="noreferrer">
            Terms & Conditions
          </a>
        </div>
      </section>
    </div>
  );
}
