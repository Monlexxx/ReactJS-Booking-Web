import React from "react";
import styles from "./Hotel.module.css";

// Tạo component Hotel để hiển thị từng Hotel con
const Hotel = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <img alt="hotel" src={props.image} className={styles.image}></img>
        <div className={styles["hotel-text"]}>
          <a href="/detail" className={styles.name}>
            {props.name}
          </a>
          <p className={styles.city}>{props.city}</p>
          <p className={styles.price}>Starting from ${props.price}</p>
          <div className={styles.flex}>
            <p className={styles.rate}>{props.rate}</p>
            <p className={styles.type}>{props.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
