import React from "react";
import SearchGroup from "./SearchGroup";
import Navbar from "../home/NavbarComponents/Navbar";
import Footer from "../home/Footer/Footer";
import Register from "../home/RegisterForm/RegisterForm";

const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchGroup />
      <Register />
      <Footer />
    </div>
  );
};

export default Search;
