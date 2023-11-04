import Navbar from "./Navbar";
import "./css/Header.css";

const Hader = () => {
  return (
    <>
      <div className="container-fluid header">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-start">
              <h3 className="header-text py-2 px-1">News App</h3>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Hader;
