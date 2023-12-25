import { useCart } from "../contexts/CartProvider";
import styles from "./Product.module.css";
import { toast } from "react-toastify";

function Product({ id, title, image, price }) {
  const { addItemToCart, cart } = useCart();
  const handleAdd = () => {
    for (let item of cart) {
      if (item.id === id) {
        toast.error("item already added");
        return;
      }
    }
    const newCartItem = {
      id: id,
      title: title,
      image: image,
      price: price,
      quantity: 1,
    };
    addItemToCart(newCartItem);
    toast.info("item added successfully");
  };
  return (
    <div className={styles.product}>
      <img className={styles.productImage} src={image} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>&#8377;{price}</p>
      <button className={styles.addToCartBtn} onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
