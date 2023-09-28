import React from "react";
import styles from "./HotelType.module.css";

// Tạo component để render từng loại khách sạn
const HotelType = (props) => {
  return (
    <div>
      <img className={styles.image} src={props.image} alt="hotel type"></img>
      <a className={styles.name} href="/detail">
        {props.name}
      </a>
      <p className={styles.count}>{props.count} hotels</p>
    </div>
  );
};

export default HotelType;
