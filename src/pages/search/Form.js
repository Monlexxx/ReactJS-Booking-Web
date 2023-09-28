import React from "react";
import styles from "./Form.module.css";

// Component form nằm bên trong component SearPopup bên trái trang detail
const Form = () => {
  return (
    <form>
      <div>
        <label className={styles.title} type="text">
          Destination
        </label>
        <br />
        <input className={styles["destination_input"]}></input>
      </div>
      <div>
        <label className={styles.title}>Check-in Date</label>
        <br />
        <input
          placeholder="06/24/2022 - 06/24/2022"
          className={styles["checkinDate_input"]}
          type="date"
        ></input>
      </div>
      <div>
        <p className={styles.title}>Options</p>

        <div className={styles.options}>
          <label>Min price per night</label>
          <input type="number" min="0" step="0.01"></input>
        </div>
        <div className={styles.options}>
          <label>Max price per night</label>
          <input type="number" min="0" step="0.01"></input>
        </div>
        <div className={styles.options}>
          <label>Children</label>
          <input type="number" min="0" step="1"></input>
        </div>
        <div className={styles.options}>
          <label>Adult</label>
          <input type="number" min="0" step="1"></input>
        </div>
        <div className={styles.options}>
          <label>Room</label>
          <input type="number" min="0" step="1"></input>
        </div>
      </div>

      <button type="submit" className={styles["button-primary"]}>
        Search
      </button>
    </form>
  );
};

export default Form;
