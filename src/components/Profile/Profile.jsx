import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/user/userSlice";

import Sidebar from "../Sidebar/Sidebar";

import styles from "../../styles/blocks/signUp.module.css";

export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };

  return (
    <div className={styles.profile}>
      {!currentUser ? (
        <span>You need to login</span>
      ) : (
        <>
          <Sidebar />
          <div className={styles.wrapper}>
            <div className={styles.signUp__wrapper}>
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

                <button type="submit" className={styles.submit}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
