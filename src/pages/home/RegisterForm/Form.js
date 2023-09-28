import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Your Email"></input>
      <button type="submit" className={styles["button-primary"]}>
        Subcribe
      </button>
    </form>
  );
};

export default Form;
