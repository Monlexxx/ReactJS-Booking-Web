import React, { useEffect, useRef, useState } from "react";
import styles from "./Form.module.css";
import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// Tạo component Form là  child component của Header component, sau đó render trong header component
const Form = () => {
  // Sử dụng useState để đóng mở modal DateRange
  const [isOpen, setIsOpen] = useState(false);
  // dùng useState để set range cho ngày hiển thị, công 7 so với ngày hiện tại
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const refCalen = useRef(null);
  // Nhấn phím esc thì cửa sổ DataRange ẩn đi
  const escPress = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };
  // Nhấn ngoài phạm vi DataRange thì cửa sổ DataRange sẽ ẩn đi
  const outsideDatarRangeClick = (event) => {
    if (refCalen.current && !refCalen.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    // Thêm sự kiện nhấn trên trang hoặc click esc để tắt cửa sổ DataRange
    document.addEventListener(`keydown`, escPress, true);
    document.addEventListener(`click`, outsideDatarRangeClick, true);
  });
  // Thêm sự kiện khi nhấn vào nút Search thì chuyển qua trang /search
  const searchClickHandler = (event) => {
    event.preventDefault();
    window.location.replace("/search");
  };

  return (
    <form className={styles.form} onSubmit={searchClickHandler}>
      <div>
        <i className="fa fa-bed"></i>
        <input type="text" placeholder="Where are you going?"></input>
      </div>
      <div className={styles.dateRange} onClick={() => setIsOpen(true)}>
        <i className="fa fa-calendar"></i>
        <input
          placeholder="06-24-2022 to 06-24-2022"
          readOnly
          value={`${format(range[0].startDate, "dd-MM-yyyy")} - ${format(
            range[0].endDate,
            "dd-MM-yyyy"
          )}`}
        ></input>
        {/* Nếu state của isOpen là true thì hiện cửa sổ DateRange */}
        <div ref={refCalen}>
          {isOpen && (
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              className={styles.date}
              // minDate={new Date()}
              onChange={(item) => setRange([item.selection])}
              ranges={range}
            />
          )}
        </div>
      </div>
      <div>
        <i className="fa fa-female"></i>
        <input placeholder="1 adult &#x2022; 0 children &#x2022; 1 room"></input>
      </div>
      <button type="submit" className={styles["button-primary"]}>
        Search
      </button>
    </form>
  );
};

export default Form;
