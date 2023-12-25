import React from "react";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useCart();
  if (cart.length === 0) return <h1>No Items Found...</h1>;
  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  if (cart.length === 0) return <h1>No Items Found</h1>;
  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      <div>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <h1>Total Amount : &#8377; {totalAmount}</h1>
    </div>
  );
}

export default Cart;
