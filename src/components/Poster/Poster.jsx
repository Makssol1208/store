import { useSpring, a } from '@react-spring/web'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toggleForm } from "../../store/user/userSlice";

import { ROUTES } from "../../utils/routes";

import HERO from "../../img/hero/hero.png";

import styles from "../../styles/blocks/hero.module.css";

export default function Poster() {
  
  // Animation image Poster
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

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

        <div className={styles.hero__img} onMouseEnter={() => set(state => !state)}>
          <a.img src={HERO} alt="Main" style={{ opacity: opacity.to(o => 1 - o), transform }} />
          <a.img src={HERO} alt="Main" style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}/>
        </div>
      </div>
    </div>
  );
}
