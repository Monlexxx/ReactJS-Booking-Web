import Navbar from "./NavbarComponents/Navbar";
import Header from "./HeaderComponents/Header";
import Cities from "./Homepage/City/Cities";
import HotelTypes from "./Homepage/HotelTypes/HotelTypes";
import Hotels from "./Homepage/Hotels/Hotels";
import Register from "./RegisterForm/RegisterForm";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cities />
      <HotelTypes />
      <Hotels />
      <Register />
      <Footer />
    </div>
  );
};

export default Home;
