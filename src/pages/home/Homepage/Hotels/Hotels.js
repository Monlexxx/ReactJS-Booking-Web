import React from "react";
import styles from "./Hotels.module.css";
import Hotel from "./Hotel";

// Tạo component Hotels để render các hotel
const Hotels = (props) => {
  // Copy dữ liệu mẫu từ hotel.json
  const hotelsListDatas = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <h3 className={styles.title}>Homes guests love</h3>
        <div className={styles.hotels}>
          {/* Sử dụng map để render số hotel tương ứng theo data mẫu */}
          {hotelsListDatas.map((item, index) => (
            <Hotel
              key={index}
              name={item.name}
              city={item.city}
              price={item.price}
              rate={item.rate}
              type={item.type}
              image={item.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
