import React from "react";
import styles from "./Footer.module.css";
import FooterItem from "./FooterItem";

// Tạo component Footer
const Footer = (props) => {
  // Copy dữ liệu mẫu từ footer.json
  const footerDatas = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <div className={styles.footer}>
          {/* Sử dụng map method để render số lượng FooterItem 
          tương ứng với số object trong array footerDatas mẫu */}
          {footerDatas.map((footerData, index) => (
            <FooterItem key={index} col_value={footerData.col_values} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
