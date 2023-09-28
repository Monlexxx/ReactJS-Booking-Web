import React from "react";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const navbarDatas = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <div className={styles.navbarContent}>
          <h1 className={styles.title}>Booking Website</h1>
          <div>
            <button className={styles["button-secondary"]}>Register</button>
            <button className={styles["button-secondary"]}>Login</button>
          </div>
        </div>
        <div className={styles.navbarLink}>
          {navbarDatas.map((item, index) => (
            <NavbarItem
              key={index}
              type={item.type}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
