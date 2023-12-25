import React, { useContext } from "react";
import { useCart } from "../contexts/CartProvider";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import styles from "./CartItem.module.css";

function CartItem({ id, price, title, image, quantity }) {
  const { IncreaseQty, DecreaseQty, RemoveItem } = useCart();
  return (
    <div className={styles.cartItem}>
      {/* left */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}>
          <img src={image} alt={title} className={styles.cartImage} />
        </div>
        <h3>{title}</h3>
      </div>
      {/* right */}
      <div className={styles.otherControls}>
        <div className={styles.qtyInput}>
          <button
            onClick={() => {
              IncreaseQty(id);
            }}>
            <AiOutlinePlus />
          </button>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <button
            onClick={() => {
              if (quantity <= 1) return;
              DecreaseQty(id);
            }}>
            <AiOutlineMinus />
          </button>
        </div>
        <p> &#8377;{price * quantity}</p>
        <button
          onClick={() => {
            RemoveItem(id);
          }}
          className={styles.removeItemBtn}>
          <ImCross />
        </button>
      </div>

      {/* ------------------------old--------------------- */}
    </div>
  );
}

export default CartItem;
