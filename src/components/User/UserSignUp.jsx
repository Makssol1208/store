import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/user/userSlice";

import closeBtn from "../../img/product/close.svg";
import styles from "../../styles/blocks/signUp.module.css";

export default function UserSignUp({ closeForm, toggleCurrentFormType }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__wrapper}>
        <div className={styles["signUp__title-wrap"]}>
          <h2>Register</h2>
          <img
            src={closeBtn}
            alt="close"
            className={styles.close}
            onClick={closeForm}
          />
        </div>

        <form className={styles.signUp__form} onSubmit={handleSubmit}>
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
          <div
            className={styles.link}
            onClick={() => toggleCurrentFormType("login")}
          >
            I already have an account
          </div>
          <button type="submit" className={styles.submit}>
            Create an account
          </button>
        </form>
      </div>
    </section>
  );
}
