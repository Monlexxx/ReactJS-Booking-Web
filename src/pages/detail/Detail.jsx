import Navbar from "../home/NavbarComponents/Navbar";
import Footer from "../home/Footer/Footer";
import HotelsDetail from "./HotelsDetail";

// Tái sử dụng component Navbar.js và Footer.js để xây dựng trang detail
const Detail = () => {
  return (
    <div>
      <div>
        <Navbar />
        <HotelsDetail />
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
