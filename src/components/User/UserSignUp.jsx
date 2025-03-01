import styles from "../../styles/blocks/signUp.module.css";
import closeBtn from "../../img/product/close.svg";

export default function UserSignUp() {
  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__wrapper}>
        <div className={styles["signUp__title-wrap"]}>
          <h2>Register</h2>
          <img src={closeBtn} alt="close" className={styles.close} />
        </div>

        <form className={styles.signUp__form}>
          <div className={styles.group}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              autoComplete="off"
              onChange={() => {}}
              required
            />
          </div>
          <div className="group">
            <input type="name" name="name" placeholder="Your name" />
          </div>
          <div className={styles.group}>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              autoComplete="off"
              onChange={() => {}}
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="avatar"
              name="avatar"
              placeholder="Your avatar"
              autoComplete="off"
              onChange={() => {}}
              required
            />
          </div>
        </form>
        <div className={styles.link} onClick={() => {}}>
          I already have an account
        </div>
        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </div>
    </section>
  );
}
