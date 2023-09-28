import React from "react";
import styles from "./City.module.css";

// Tạo component City để hiển thị từng city
const City = (props) => {
  return (
    <div className={styles.city}>
      <img src={props.src} alt="city" className={styles.img}></img>
      <div className={styles["city-text"]}>
        {/* <div className={styles["test"]}> */}
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.subText}>{props.subText}</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default City;
