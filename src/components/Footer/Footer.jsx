import styles from "../../styles/blocks/footer.module.css";

import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import Logo from "../../img/header/LOGO.png";
import Youtube from "../../img/footer/youtube.svg";
import Facebook from "../../img/footer/facebook.svg";
import Instagram from "../../img/footer/instagram.svg";

export default function Footer() {
  return (
    <section id={styles.footer}>
      <footer className={styles.footer}>
        <div className={styles.footer__wrapper}>
          <Link className={styles.Logo} to={ROUTES.HOME}>
            <img src={Logo} alt="stuff" />
          </Link>
          <p>
            Developed by <span>Maks Soloviov</span>
          </p>
          <div className="footer__social">
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={Youtube} alt="Youtube" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
