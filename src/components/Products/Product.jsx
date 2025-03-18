import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/user/userSlice";
import { useEffect, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import styles from "../../styles/blocks/singleProduct.module.css";

const SIZES = [4.5, 5, 5.5];

export default function Product(item) {
  const { title, price, images, description } = item;
  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images?.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className={styles.main}>
      <Sidebar />
      <section className={styles.single__product}>
        <div className={styles.img__wrap}>
          <div className={styles.img__big}>
            <img className={styles.big} src={currentImage} alt="Product" />
          </div>

          <div className={styles.little__img}>
            <div className={styles.little__img_wprap}>
              {images?.map((image, i) => (
                <img
                  className={styles.small}
                  src={image}
                  key={i}
                  alt="Product"
                  onClick={() => {
                    setCurrentImage(image);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className={styles.product__title}>{title}</h2>
          <span className={styles.single__product_price}>{price}$</span>
          <div className={styles.color}>
            Color: <span>Blanc</span>
          </div>
          <div className={styles.size}>
            <p>Sizes:</p>
            {SIZES.map((size) => (
              <span
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ""
                }`}
                onClick={() => {
                  setCurrentSize(size);
                }}
                key={size}
              >
                {size}
              </span>
            ))}
          </div>
          <div className={styles.single__product_text}>
            <p>{description}</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <a
                onClick={addToCart}
                href="#!"
                className={styles.btn}
                disabled={!currentSize}
              >
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
