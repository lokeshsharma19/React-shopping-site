import { useEffect, useState } from "react";
import Modal from "./UI/modal";
import Cart from "./Cart";
import styles from "./Header.module.css";
import Container from "./UI/Container";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../contexts/CartProvider";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);
  const handleClick = () => {
    setIsModalOpen(false);
  };
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => {
    console.log(item);
    return acc + item.quantity;
  }, 0);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1 className="logo">ARC</h1>
          <button
            className={styles.showCart}
            onClick={() => {
              setIsModalOpen(true);
            }}>
            <span className={styles.cartItemAndNum}>
              <FaShoppingCart />
              {totalQuantity > 0 && (
                <span className={styles.number}>{totalQuantity}</span>
              )}
            </span>
            <span>Cart</span>
          </button>
        </nav>
        {isModalOpen && (
          <Modal handleClick={handleClick}>
            <Cart />
          </Modal>
        )}
      </Container>
    </header>
  );
}

export default Header;
