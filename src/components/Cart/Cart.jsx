import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/user/userSlice";

import { sumBy } from "../../utils/common";

import styles from "../../styles/blocks/cart.module.css";
import Sidebar from "../Sidebar/Sidebar";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);
  

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className={styles.main}>
      <Sidebar />
      <section className={styles.cart}>
        <h2 className={styles.title}>Your cart</h2>

        {!cart.length ? (
          <div className={styles.empty}>Here is empty</div>
        ) : (
          <>
            <div className={styles.list}>
              {cart.map((item) => {
                const { title, category, images, price, id, quantity } = item;

                return (
                  <div className={styles.item} key={id}>
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${images[0]})` }}
                    />
                    <div className={styles.info}>
                      <h3 className={styles.name}>{title}</h3>
                      <div className={styles.category}>{category.name}</div>
                    </div>

                    <div className={styles.price}>{price}$</div>

                    <div className={styles.quantity}>
                      <div
                        className={styles.minus}
                        onClick={() =>
                          changeQuantity(item, Math.max(1, quantity - 1))
                        }
                      >
                        -
                      </div>

                      <span>{quantity}</span>

                      <div
                        className={styles.plus}
                        onClick={() =>
                          changeQuantity(item, Math.max(1, quantity + 1))
                        }
                      >
                        +
                      </div>
                    </div>

                    <div className={styles.total}>{price * quantity}$</div>

                    <div
                      className={styles.close}
                      onClick={() => removeItem(item.id)}
                    >
                      x
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.actions}>
              <div className={styles.total}>
                TOTAL PRICE:{" "}
                <span>
                  {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
                </span>
              </div>

              <button className={styles.btn}>Proceed to checkout</button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
