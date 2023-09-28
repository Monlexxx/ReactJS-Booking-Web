import React from "react";
import styles from "./SearchListItem.module.css";

// Component dùng để hiển thị tựng khách sạn trong số 3 khách sạn hiển thị bên phải
const SearchPopup = (props) => {
  return (
    <div className={styles.grid}>
      <img alt="hotel" src={props.image} className={styles.image}></img>
      <div className={styles["searchListItem_description"]}>
        <a className={styles.name} href="/detail">
          {props.name}
        </a>
        <p className={styles.distance}>{props.distance} from center</p>
        <p className={styles.tag}>{props.tag}</p>
        <p className={styles.description}>{props.description}</p>
        <p>{props.type}</p>
        <p className={styles.cancel}>
          {props.free_cancel === true && "Free Cancelation"}
        </p>
        <p className={styles["cancel_quote"]}>
          {props.free_cancel === true &&
            "You can cancel later, so lock this great price today! "}
        </p>
      </div>
      <div className={styles["flex_child"]}>
        <p className={styles["rate_text"]}>{props.rate_text}</p>
        <p className={styles.rate}>{props.rate}</p>
      </div>
      <div className={styles["searchListItem_register"]}>
        <p className={styles.price}>${props.price}</p>
        <p className={styles["tax_fee"]}>Includes taxes and fees</p>
        <button type="button" className={styles["button-primary"]}>
          See availability
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;
