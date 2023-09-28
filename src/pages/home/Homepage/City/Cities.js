import React from "react";
import styles from "./Cities.module.css";
import City from "./City";

// Tạo Cities component là nơi để render các city con trong dữ liệu mẫu
const Cities = (props) => {
  // Copy dữ liệu mẫu từ city.json
  const citiesDatas = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <div className={styles.cities}>
          {/* Sử dụng map để render các city, 
          tạo các thuộc tính để truyền dữ liệu từ Cities.js (component cha) qua City.js (component con) */}
          {citiesDatas.map((item, index) => (
            <City
              key={index}
              src={item.image}
              subText={item.subText}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities;
