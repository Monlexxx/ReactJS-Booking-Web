import React from "react";
import styles from "./SearchGroup.module.css";
import SearchList from "./SearchList";
import SearchPopup from "./SearchPopup";

// Component để gộp SearchPopup và SearchList
const SearchGroup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <div className={styles.flex}>
          <SearchPopup />
          <SearchList />
        </div>
      </div>
    </div>
  );
};

export default SearchGroup;
