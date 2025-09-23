import React from "react";
import styles from "./TextInput.module.css";

function TextInput({ value, onChange, placeholder = "", type = "text", className = "" }) {
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
