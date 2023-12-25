import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

function Modal({ children, handleClick }) {
  return createPortal(
    <>
      <div className={styles.modalBackDrop} onClick={handleClick}></div>
      <div className={styles.modalContent}>{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
