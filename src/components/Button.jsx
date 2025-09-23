import React from "react";
import styles from "./Button.module.css";

function Button({ children, onClick, type = "button", variant = "primary" }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;