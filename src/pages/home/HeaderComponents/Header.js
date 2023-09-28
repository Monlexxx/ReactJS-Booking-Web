import React from "react";
import styles from "./Header.module.css";
import Form from "./Form";

// Tạo component Header, render lại trong Home.jsx
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <h2 className={styles.headerTitle}>
          A lifetime of discounts? It's Genius.
        </h2>
        <p className={styles.quote}>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account.
        </p>
        <button className={styles["button-primary"]}>Sign in/Header</button>
        <Form />
      </div>
    </div>
  );
};

export default Header;
