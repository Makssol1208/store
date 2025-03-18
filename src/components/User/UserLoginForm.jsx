import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/user/userSlice";

import closeBtn from "../../img/product/close.svg";
import styles from "../../styles/blocks/signUp.module.css";

export default function UserLoginForm({ toggleCurrentFormType, closeForm }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;

    dispatch(updateUser(values));
    closeForm();
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__wrapper}>
        <div className={styles["signUp__title-wrap"]}>
          <h2>Login</h2>
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

          <div
            className={styles.link}
            onClick={() => toggleCurrentFormType("signup")}
          >
            Create an account
          </div>
          <button type="submit" className={styles.submit}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
