import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid my-nav">
        <div className="row">
          <div className="col-12">
            <ul className="mb-0 d-flex flex-wrap justify-content-start align-items-center gap-4 py-2 my-navbar">
              <li>
                <Link className="my-navlink" to="/">All</Link>
              </li>
              <li>
                <Link className="my-navlink" to="/busniess">Busniess</Link>
              </li>
              <li>
                <Link className="my-navlink" to="/science">Science</Link>
              </li>
              <li>
                <Link className="my-navlink" to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link className="my-navlink" to="/health">Health</Link>
              </li>
              <li>
                <Link className="my-navlink" to="/sports">Sports</Link>
              </li>
              <li>
                <Link className="my-navlink" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
