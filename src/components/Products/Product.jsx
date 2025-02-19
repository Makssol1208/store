import { Link } from "react-router-dom";
import styles from "../../styles/blocks/singleProduct.module.css";
import { ROUTES } from "../../utils/routes";
import Sidebar from "../Sidebar/Sidebar";

const SIZES = [4.5, 5, 5.5];

export default function Product({ title, price, images, description }) {
  return (
    <div className={styles.main}>
      <Sidebar/>
      <section className={styles.single__product}>
        <div className={styles.img__wrap}>
          <div className={styles.img__big}>
            <img className={styles.big} src={images} alt="Product" />
          </div>

          <div className={styles.little__img}>
            <div className={styles.little__img_wprap}>
              {images?.map((image, i) => (
                <img
                  className={styles.small}
                  src={image}
                  key={i}
                  alt="Product"
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.single__product_desc}>
          <h2 className={styles.product__title}>{title}</h2>
          <span className={styles.single__product_price}>{price}$</span>
          <div className={styles.color}>
            Color: <span>Blanc</span>
          </div>
          <div className={styles.size}>
            <p>Sizes:</p>
            {SIZES.map((size) => (
              <span className={styles.size} onClick={() => {}} key={size}>
                {size}
              </span>
            ))}
          </div>
          <div className={styles.single__product_text}>
            <p>{description}</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <a href="#!" className={styles.btn}>
                Add to cart
              </a>
            </div>
            <div className={styles.button}>
              <a href="#!" className={styles.favor}>
                Add to favorites
              </a>
            </div>
          </div>

          <div className={styles.single__footer}>
            <span className={styles.product__priceAmount}>
              {Math.floor(Math.random() * 20 + 1)} people purchased
            </span>
            <Link className={styles.link} to={ROUTES.HOME}>
              Find in a store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
