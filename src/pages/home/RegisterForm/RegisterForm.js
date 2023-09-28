import React from "react";
import styles from "./RegisterForm.module.css";
import Form from "./Form";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <h2 className={styles.headerTitle}>Save time, save money!</h2>
        <p className={styles["register_form_text"]}>
          Sign up and we'll send the best deal for you
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Header;
