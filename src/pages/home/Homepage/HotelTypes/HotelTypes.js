import React from "react";
import HotelType from "./HotelType";
import styles from "./HotelTypes.module.css";

// Tạo component để render các loại khách sạn
const HotelTypes = (props) => {
  // data mẫu từ type.json
  const hotelTypeDatas = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <h3 className={styles.title}>Browse by the property type</h3>
        <div className={styles["hotel-types"]}>
          {/* Sử dụng map để render số loại khách sạn tương ứng */}
          {hotelTypeDatas.map((item, index) => (
            <HotelType
              key={index}
              name={item.name}
              count={item.count}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelTypes;
