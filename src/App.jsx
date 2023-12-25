import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
import Header from "./components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        autoClose={600}
        hideProgressBar={true}
      />
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
