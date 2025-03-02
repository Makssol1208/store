import styles from "../../styles/blocks/signUp.module.css";
import closeBtn from "../../img/product/close.svg";
import { useState } from "react";

export default function UserSignUp({closeForm}) {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__wrapper}>
        <div className={styles["signUp__title-wrap"]}>
          <h2>Register</h2>
          <img src={closeBtn} alt="close" className={styles.close} onClick={closeForm} />
        </div>

        <form className={styles.signUp__form}>
          <div className={styles.group}>
            <input
              type="email"
              name="email"
              value={values.email}
              placeholder="Your email"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className="group">
            <input
              type="name"
              name="name"
              value={values.name}
              placeholder="Your name"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="password"
              name="password"
              value={values.password}
              placeholder="Your password"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="avatar"
              name="avatar"
              value={values.avatar}
              placeholder="Your avatar"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className={styles.link} onClick={handleChange}>
          I already have an account
        </div>
        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </div>
    </section>
  );
}
