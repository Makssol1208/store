import styles from "../../styles/blocks/hero.module.css";

import HERO from "../../img/hero/hero.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export default function Poster() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector(({ user }) => user);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero__wrapper} data-text="BIG SALE 20%">
        <div className={styles.hero__content}>
          <p className={styles.hero__content_title}>the bestseller of 2022</p>
          <h1 className={styles.hero__content__desc}>
            LENNON r2d2
            <br /> with NVIDIA 5090 TI
          </h1>
          <div className={styles.button}>
            <a href="#!" className="btn" onClick={handleClick}>
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
