import Header from "./Header";
import { Outlet } from "react-router-dom";
import GoTop from "./GoTop";
import Footer from "./Footer";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <GoTop />
      <Footer />
    </>
  );
};

export default Layout;
