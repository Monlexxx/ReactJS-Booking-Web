import React from "react";
import styles from "./FooterItem.module.css";
import "./FooterItem.module.css";

// Tạo Footer component
const FooterItem = (props) => {
  return (
    <div className={styles["footer_item"]}>
      {/* Vì mỗi object trong array có nhiều item, nên cần sử dụng map một lần nữa để render tiếp */}
      {props.col_value.map((item, index) => (
        <a className={styles.link} href="/detail" key={index}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default FooterItem;
