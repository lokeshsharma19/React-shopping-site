import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    case "INC_QTY": {
      return cart.map((Item) => {
        if (Item.id === action.payload.id) {
          return { ...Item, quantity: Item.quantity + 1 };
        }
      });
    }
    case "DEC_QTY": {
      return cart.map((Item) => {
        if (Item.id === action.payload.id) {
          return { ...Item, quantity: Item.quantity - 1 };
        }
      });
    }
    case "REMOVE_ITEM": {
      return cart.filter((item) => item.id !== action.payload.id);
    }
  }
  return cart;
};
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };
  const IncreaseQty = (id) => {
    dispatch({ type: "INC_QTY", payload: { id: id } });
  };
  const DecreaseQty = (id) => {
    dispatch({ type: "DEC_QTY", payload: { id: id } });
  };
  const RemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, IncreaseQty, DecreaseQty, RemoveItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
export default CartProvider;
