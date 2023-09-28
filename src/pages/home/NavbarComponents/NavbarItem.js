import React from "react";
import styles from "./NavbarItem.module.css";

const NavbarLink = (props) => {
  const icon = "fa " + props.icon;
  return (
    <nav
      className={`${styles.navbarItem} ${
        props.active === true && styles.active
      }`}
    >
      <a href="/search">
        <i className={icon}></i>
        {props.type}
      </a>
    </nav>
  );
};

export default NavbarLink;
