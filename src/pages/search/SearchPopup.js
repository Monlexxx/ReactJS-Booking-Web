import React from "react";
import styles from "./SearchPopup.module.css";
import Form from "./Form";

// Component để hiện thị bên trái trang detail
const SearchPopup = () => {
  return (
    <div className={styles.form}>
      <h3>Search</h3>
      <Form />
    </div>
  );
};

export default SearchPopup;
