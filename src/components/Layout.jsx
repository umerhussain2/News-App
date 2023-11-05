import Header from "./Header";
import { Outlet } from "react-router-dom";
import GoTop from "./GoTop";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <GoTop />
    </>
  );
};

export default Layout;
