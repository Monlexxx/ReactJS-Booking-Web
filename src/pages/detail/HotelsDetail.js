import styles from "./HotelsDetail.module.css";

// Tạo component để render dữ liệu từ detail.json và thông tin của trang
const HotelsDetail = (props) => {
  // Copy data mẫu từ detail.json
  const HotelsDetailData = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerchild}>
        <div className={styles.grid}>
          <div className={styles.title}>
            <h4 className={styles.name}>{HotelsDetailData.name}</h4>
            <p className={styles.address}>
              <icon className="fa-solid fa-location-dot"></icon>
              {HotelsDetailData.address}
            </p>
            <p>{HotelsDetailData.distance}</p>
            <p className={styles["cancel_quote"]}>{HotelsDetailData.price}</p>
          </div>
          <div>
            <button type="button" className={styles["button-primary"]}>
              Reserve a book now
            </button>
          </div>
          <div className={styles.image}>
            <img alt="hotel" src={HotelsDetailData.photos[0]}></img>
            <img alt="hotel" src={HotelsDetailData.photos[1]}></img>
            <img alt="hotel" src={HotelsDetailData.photos[2]}></img>
            <img alt="hotel" src={HotelsDetailData.photos[3]}></img>
            <img alt="hotel" src={HotelsDetailData.photos[4]}></img>
            <img alt="hotel" src={HotelsDetailData.photos[5]}></img>
          </div>
          <div className={styles.description}>
            <h4 className={styles.name}>{HotelsDetailData.title}</h4>
            <p className={styles["description_text"]}>
              {HotelsDetailData.description}
            </p>
          </div>
          <div className={styles["description_register"]}>
            <p className={styles["description_register_text"]}>
              Perfect for a 9-night stay!
            </p>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <div className={styles.flex}>
              <p className={styles.price}>
                ${HotelsDetailData.nine_night_price}
              </p>
              <p> (9 nights)</p>
            </div>
            <button className={styles["button-primary"]}>
              Reserve a book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsDetail;
